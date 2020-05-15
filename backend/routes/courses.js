const express = require('express');
const router = express.Router();
const multer = require('multer');

const Course = require('../model/course');
const SubCategory = require('../model/subcategory');
const Category = require('../model/category');


const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error('Invalid file type');
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images');
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
})


router.post('', multer({ storage: storage }).single('image'), (req, res, next) => {
    const course = new Course({
        title: req.body.title,
        description: req.body.description,
        subCatId: req.body.subCatId,
    });
    course.save();
    SubCategory.findById({ _id: req.body.subCatId }, function(err, doc) {
        if (err) { console.log("Error with updateing "); return; }
        console.log(doc);
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
