const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    noOfSubCategories: { type: Number, default: 0 },
    noOfCourses: { type: Number, default: 0 },
    subCatList: [{ type: String }]
});

module.exports = mongoose.model('Category', categorySchema);
