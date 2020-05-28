const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Course = require('../models/course/course.model');
const multer = require('multer');

const app = express();
const router = express.Router();

//Model
const Course = require('../models/course/course.model');
const SubCategory = require('../models/course/subcategory.model');
const Category = require('../models/course/category.model');
const Module = require('../models/course/modules.model');

const convert = require('../routes/convert.route');
const FILE_PATH = '../uploads';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('qwerty');
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            console.log('Inside Multer valid');
            error = null;
        }
        cb(error, "./images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        console.log(ext);
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});

// Create Course Route
router.post('', multer({ storage: storage }).single('image'), (req, res, next) => {
    console.log('Hello');
    const url = req.protocol + '://' + req.get("host");


    const mod = require('../data/Module.json')

    var course = new Course({
        title: req.body.title,
        description: req.body.description,
        subcategory: req.body.subcategoryId,
        price: 2500,
        modules: mod,
        imagePath: url + "/images/" + req.file.filename

    });
    course.save((err, doc) => {
        if (!err) {
            console.log(course.subcategory);
            SubCategory.findById(course.subcategory, function(err, doc) {
                if (err) { console.log("Error with updateing "); return; }
                console.log(doc);
                doc.noOfCourses = doc.noOfCourses + 1;
                doc.courseList.push(course._id);
                doc.save(() => console.log(doc));
                Category.findById({ _id: doc.catId }, function(err, catdoc) {
                    if (err) { console.log("Error with updateing "); return; }
                    catdoc.noOfCourses = catdoc.noOfCourses + 1;
                    catdoc.save(() => console.log(catdoc));
                })
            });
            // res.send(doc);
            console.log("Course saved in DB");
            //Drop the models collection, so another course can be added
            mongoose.connection.collections['modules'].drop(function(err) {
                console.log('collection dropped');
            });
        } else { console.log('Error in Course Save :' + JSON.stringify(err, undefined, 2)); }
    });


    res.status(201).json({
        message: "Courses added successfully",
        courseId: course._id,
        imagePath: course.imagePath
    });
});

router.get('', (req, res, next) => {
    Course.find().then(docs => {
        res.status(200).json({
            message: "Categories fetched successfully",
            courses: docs
        });

    });

});

router.put(
    "/:id",
    multer({ storage: storage }).single("image"),
    (req, res, next) => {
        const id = req.body.id;
        let module;
        Course.findById({ _id: id }).then(docs => {
            module = docs.modules;
        })
        let imagePath = req.body.imagePath;
        if (req.file) {
            const url = req.protocol + "://" + req.get("host");
            imagePath = url + "/images/" + req.file.filename
        }
        const course = new Course({
            _id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            subcategory: req.body.subcategoryId,
            imagePath: url + "/images/" + req.file.filename,
            modules: module,
        });
        console.log(course);
        Course.updateOne({ _id: req.params.id }, post).then(result => {
            res.status(200).json({ message: "Update successful!" });
        });
    }
);

router.delete('/:id', (req, res, next) => {
    console.log('ID = ' + req.params.id);
    Course.deleteOne({ _id: req.params.id }).then(result => {
        console.log("Delete");
    })
    res.status(201).json({ message: "Course deleted" });
});
module.exports = router;