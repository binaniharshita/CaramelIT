const mongoose = require('mongoose');
const Item = require('./item.model');

const CourseSchema = new mongoose.Schema({
    title:{type: String},
    description:{type: String},
    module:{type: Number},
    category:{type:String},
    subcategory:{type:String},
    content: [Item]
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;