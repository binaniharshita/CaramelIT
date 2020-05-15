const express = require('express');
const bodyParser = require('body-parser');
const Category = require('./model/category');
const SubCategory = require('./model/subcategory');
const Course = require('./model/course');
const mongoose = require('mongoose');
const multer = require('multer');
const courseRoute = require('./routes/courses');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const url = "mongodb://localhost:27017/caramelIt";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.log(err));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, DELETE, POST, PATCH, OPTIONS");
    next();
});
app.use('/api/courses', courseRoute);

app.post('/api/categories', (req, res, next) => {
    const category = new Category({
        title: req.body.title,
        description: req.body.description
    });
    category.save();

    res.status(201).json({
        message: "Category added successfully",
        categoryId: category._id
    })
});
app.delete('/api/categories/:id', (req, res, next) => {

    Category.deleteOne({ _id: req.params.id }).then(result => {
        console.log("Delete");
    })

    res.status(201).json({ message: "Category deleted" });
});

app.put('/api/categories/:id', (req, res, next) => {
    const category = new Category({
        title: req.body.title,
        description: req.body.description
    })
    Category.updateOne({ _id: req.params.id }, category).then(result => {

        res.status(200).json({
            message: "Updated successful"
        })
    })
});

app.use('/api/categories', (req, res, next) => {
    Category.find().then(docs => {


        res.status(200).json({
            message: "Categories fetched successfully",
            categories: docs
        });

    });

});

// subcategory routes

app.post('/api/subcategories', (req, res, next) => {

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
});
app.delete('/api/subcategories/:id', (req, res, next) => {

    SubCategory.deleteOne({ _id: req.params.id }).then(result => {

    })
    res.status(201).json({ message: "Category deleted" });
});

app.put('/api/categories/:id', (req, res, next) => {
    const category = new Category({
        title: req.body.title,
        description: req.body.description
    })
    Category.updateOne({ _id: req.params.id }, category).then(result => {
        res.status(200).json({
            message: "Updated successful"
        })
    })
});

app.use('/api/subcategories', (req, res, next) => {
    SubCategory.find().then(docs => {

        res.status(200).json({
            message: "Categories fetched successfully",
            subcategories: docs
        });

    });

});
// subcategory routes

module.exports = app;
