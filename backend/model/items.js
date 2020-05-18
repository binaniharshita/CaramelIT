const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    0: {
        type: String,
    },
    1: {
        type: String,
    },
    2: {
        type: String,
    }
});

module.exports = ItemSchema;
