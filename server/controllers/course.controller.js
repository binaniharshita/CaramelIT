const express = require('express');
const bodyParser = require('body-parser');
const Course = require('../models/category.model');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


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
