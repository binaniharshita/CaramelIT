const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const instructorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true
    },
    lastName: {
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
    subjects:{
        type: String
    },
    workingHours:{
        type: String
    },
    experience:{
        type: String
    },
    profileDetails: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// Custom validation for email
instructorSchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;