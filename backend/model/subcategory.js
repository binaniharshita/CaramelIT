const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    noOfCourses: { type: Number, default: 0 },
    catId: { type: String, required: true },
    subCourseList: [{ type: String }]
});

module.exports = mongoose.model('SubCategory', subCategorySchema);
