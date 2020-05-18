const mongoose = require('mongoose');
const item = require('../model/items');
const Schema = mongoose.Schema;


const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    noOfModules: { type: Number, default: 0 },
    subCatId: { type: String, required: true },
    content: { type: JSON }

});

module.exports = mongoose.model('Course', courseSchema);
