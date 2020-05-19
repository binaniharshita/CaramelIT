const express = require('express');
const bodyParser = require('body-parser');
const Course = require('../models/course/course.model');
const mongoose = require('mongoose');
const multer = require('multer');


require('../')
const convert = require('../routes/convert.route');
const FILE_PATH = '../uploads';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



module.exports.create = (req, res, next) => {
    console.log('Inside route post course create');
    console.log(req.body.title + " " + req.body.description + " " + req.body.subcategoryId);
    const mod = require('../data/Module.json')

    var crs = new Course({
        title: req.body.title,
        description: req.body.description,
        subcategory: req.body.subcategoryId,
        price: req.body.price,
        modules: mod
    });
    crs.save((err, doc) => {
        if (!err) {
            res.send(doc);
            console.log("Course saved in DB");
            //Drop the models collection, so another course can be added
            mongoose.connection.collections['modules'].drop(function(err) {
                console.log('collection dropped');
            });
        } else { console.log('Error in Course Save :' + JSON.stringify(err, undefined, 2)); }
    });

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