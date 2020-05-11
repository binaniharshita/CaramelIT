const express = require('express');
const bodyParser = require('body-parser');
const Category = require('../models/category.model');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports.create = (req, res, next) => {
    const category = new Category({
        title: req.body.title,
        description: req.body.description
    });
    category.save();

    res.status(201).json({
        message: "Category added successfully",
        categoryId: category._id
    })
};

module.exports.delete = (req, res, next) => {

    Category.deleteOne({ _id: req.params.id }).then(result => {
        console.log("Delete");
    })

    res.status(201).json({ message: "Category deleted" });
};

module.exports.update = (req, res, next) => {
    const category = new Category({
        title: req.body.title,
        description: req.body.description
    })
    Category.updateOne({ _id: req.params.id }, category).then(result => {

        res.status(200).json({
            message: "Updated successful"
        })
    })
};

module.exports.getResult = (req, res, next) => {
    Category.find().then(docs => {


        res.status(200).json({
            message: "Categories fetched successfully",
            categories: docs
        });

    });

};
