const express = require('express');
const router = express.Router();
const multer = require('multer');

var mammoth = require("mammoth");
const { Tabletojson: tabletojson } = require('tabletojson');
const fs = require('fs');

const Course = require('../model/course');
const SubCategory = require('../model/subcategory');
const Category = require('../model/category');

const MIME_TYPE_IMAGE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'file/docx': 'doc',
    'file/doc': 'doc',
}

var docfilename = '';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "file") { // if uploading resume
            cb(null, 'backend/documents');
        } else { // else uploading image
            cb(null, 'backend/images');
        }
    },
    filename: (req, file, cb) => {
        console.log(file.mimetype);
        var name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_IMAGE[file.mimetype];
        name = name + '-' + Date.now() + '.' + ext;
        docfilename = name;
        cb(null, name);
    },
});

var upload = multer({ storage: storage });







router.post('/content', upload.single('file'), (req, res, next) => {
    console.log("Hello is bye");
    try {
        const document = req.file;
        // make sure file is available
        if (!document) {
            res.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            mammoth.convertToHtml({ path: "./backend/documents/" + docfilename })
                .then(displayResult)
                .done();

            function displayResult(result) {
                const converted = tabletojson.convert(result.value, { useFirstRowForHeadings: true });
                var content = converted[0];
                content = JSON.stringify(content);
                console.log("Inside function" + content);
                res.send({
                    message: 'File is uploaded.',
                    content: content
                });
                res.end();
            }
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


// multer({ iStorage: storage }).single('image'),
router.post('', upload.single('image'), (req, res, next) => {

    const course = new Course({
        title: req.body.title,
        description: req.body.description,
        subCatId: req.body.subCatId,
        content: req.body.content
    });
    course.save((err, doc) => { if (err) { console.log(err) } else { console.log(doc) } });
    SubCategory.findById({ _id: req.body.subCatId }, function(err, doc) {
        if (err) { console.log("Error with updateing "); return; }
        doc.noOfCourses = doc.noOfCourses + 1;
        doc.subCourseList.push(course._id);
        doc.save(() => console.log(doc));
        Category.findById({ _id: doc.catId }, function(err, catdoc) {
            if (err) { console.log("Error with updateing "); return; }
            catdoc.noOfCourses = catdoc.noOfCourses + 1;
            catdoc.save(() => console.log(catdoc));
        })
    });
    res.status(201).json({
        message: "Courses added successfully",
        courseId: course._id,
        content: course.content,
    });
});

router.delete('/:id', (req, res, next) => {
    console.log('ID = ' + req.params.id);
    Course.deleteOne({ _id: req.params.id }).then(result => {
        console.log("Delete");
    })
    res.status(201).json({ message: "Course deleted" });
});

router.put('/:id', (req, res, next) => {
    const category = new Category({
        title: req.body.title,
        description: req.body.description
    })
    Category.updateOne({ _id: req.params.id }, category).then(result => {
        console.log(result);
        res.status(200).json({
            message: "Updated successful"
        })
    })
});

router.use('', (req, res, next) => {
    Course.find().then(docs => {

        console.log("response");
        console.log("Hello" + docs);
        res.status(200).json({
            message: "Categories fetched successfully",
            courses: docs
        });

    });

});


module.exports = router;