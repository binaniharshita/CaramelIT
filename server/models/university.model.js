const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required : true
    },
    universityName: {
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
    country:{
        type: String
    },
    state:{
        type: String
    },
    skillset: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// Custom validation for email
universitySchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
const University = mongoose.model('University', universitySchema);

module.exports = University;