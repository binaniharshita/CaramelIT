const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    0: {
        type: String,
        required: true
    },
    1: {
        type: String,
        required: true
    },
    2: {
        type: String,
        required: true
    }
});

module.exports = ItemSchema;