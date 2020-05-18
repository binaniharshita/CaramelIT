const express = require('express');
const bodyParser = require('body-parser');
const Course = require('../models/category.model');
const mongoose = require('mongoose');
const multer = require('multer');


require('../')
const convert = require('../routes/convert.route');
const FILE_PATH = '../uploads';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, FILE_PATH)
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + ".docx")
    }
})

//Configure multer
const upload = multer({
    storage: storage,
    limits: {
        files: 1, // allow up to 5 files per request,
    },
    fileFilter: (req, file, cb) => {
        // allow doc only
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Only doc are allowed.'), false);
        }
        cb(null, true);
    }
});

//Upload single file

module.exports.loadLesson = (req, res) => {
    console.log('POST REQUEST');
    res.end();
}
module.exports.uploadLesson = ((upload.single("lesson"), async(req, res) => {
    try {
        const lesson = req.file;
        // make sure file is available
        if (!lesson) {
            res.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            //send response
            res.send({
                status: true,
                message: 'File is uploaded.',
                data: {
                    name: lesson.originalname,
                    mimetype: lesson.mimetype,
                    size: lesson.size
                }
            });
            res.end();
            convert.lesson();
        }
    } catch (err) {
        res.status(500).send(err);
    }
}));

module.exports.uploadScenario = (upload.single("scenario"), async(req, res) => {
    try {
        const scenario = req.file;
        // make sure file is available
        if (!scenario) {
            res.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            //send response
            res.send({
                status: true,
                message: 'File is uploaded.',
                data: {
                    name: scenario.originalname,
                    mimetype: scenario.mimetype,
                    size: scenario.size
                }
            });
            res.end();
            convert.scenario();
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports.uploadProject = (upload.single("project"), async(req, res) => {
    try {
        const project = req.file;
        // make sure file is available
        if (!project) {
            res.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            //send response
            res.send({
                status: true,
                message: 'File is uploaded.',
                data: {
                    name: project.originalname,
                    mimetype: project.mimetype,
                    size: project.size
                }
            });
            res.end();
            convert.project();
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports.uploadTest = upload.single("test"), async(req, res) => {
    try {
        const test = req.file;
        // make sure file is available
        if (!test) {
            res.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            //send response
            res.send({
                status: true,
                message: 'File is uploaded.',
                data: {
                    name: test.originalname,
                    mimetype: test.mimetype,
                    size: test.size
                }
            });
            res.end();
            convert.test();
        }
    } catch (err) {
        res.status(500).send(err);
    }
};



module.exports.create = (req, res, next) => {
    console.log(req.body.catId);
    const course = new Course({
        title: req.body.title,
        description: req.body.description,
        subcat: req.body.subCatId,
    });
    course.save();
    SubCategory.findById({ _id: course.subCatId }, function(err, doc) {
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
};
module.exports.delete = (req, res, next) => {
    console.log('ID = ' + req.params.id);
    Course.deleteOne({ _id: req.params.id }).then(result => {
        console.log("Delete");
    })
    res.status(201).json({ message: "Course deleted" });
};

module.exports.update = (req, res, next) => {
    const course = new Course({
        title: req.body.title,
        description: req.body.description
    })
    Course.updateOne({ _id: req.params.id }, course).then(result => {
        console.log(result);
        res.status(200).json({
            message: "Updated successful"
        })
    })
};

module.exports.read = (req, res, next) => {
    Course.find().then(docs => {

        console.log("response");
        console.log("Hello" + docs);
        res.status(200).json({
            message: "Categories fetched successfully",
            courses: docs
        });

    });

};
