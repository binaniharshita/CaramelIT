const mongoose = require('mongoose');

const corporateSchema = new mongoose.Schema({
    corporateName: {
        type: String,
        required : true
    },
    emailAddress: {
        type: String,
        required : true,
        unique: true
    },
    mobileNumber: {
        type: Number
    },
    others: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// Custom validation for email
corporateSchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

const Corporate = mongoose.model('Corporate', corporateSchema);

module.exports = Corporate;