const mongoose = require('mongoose');
const Module = require('./modules.model');

const CourseSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    quantity: { type: String },
    price: { type: Number },
    category: { type: String },
    subcategory: { type: String },
    modules: [Module]
});

const Course = mongoose.model('Course', CourseSchema, "All_Course");

module.exports = Course;
