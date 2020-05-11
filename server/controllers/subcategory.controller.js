const express = require('express');
const bodyParser = require('body-parser');
const SubCategory = require('../models/subcategory.model');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


module.exports.create = (req, res, next) => {


    const subcategory = new SubCategory({
        title: req.body.title,
        description: req.body.description,
        catId: req.body.catId,
    });

    subcategory.save();
    Category.findById({ _id: subcategory.catId }, function(err, doc) {
        if (err) { console.log("Error with updateing "); return; }
        console.log(doc);
        doc.noOfSubCategories = doc.noOfSubCategories + 1;
        doc.subCatList.push(subcategory._id);
        doc.save();
    });
    res.status(201).json({
        message: "SubCategory added successfully",
        subcategoryId: subcategory._id,
        categoryId: subcategory.catId,
    });
};

module.exports.delete = (req, res, next) => {

    SubCategory.deleteOne({ _id: req.params.id }).then(result => {

    })
    res.status(201).json({ message: "Category deleted" });
};

module.exports.update = (req, res, next) => {
    const subcategory = new SubCategory({
        title: req.body.title,
        description: req.body.description
    })
    SubCategory.updateOne({ _id: req.params.id }, subcategory).then(result => {
        res.status(200).json({
            message: "Updated successful"
        })
    })
};

module.exports.read = (req, res, next) => {
    SubCategory.find().then(docs => {

        res.status(200).json({
            message: "Categories fetched successfully",
            subcategories: docs
        });

    });

};
