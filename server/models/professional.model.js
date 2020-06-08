const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const professionalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number
    },
    dateOfBirth: {
        type: Date
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    noOfSkillset: {
        type: String
    },
    skillset: {
        type: String
    },
    skillset1: {
        type: String
    },
    skillset2: {
        type: String
    },
    skillset3: {
        type: String
    },
    skillset4: {
        type: String
    },
    skillset5: {
        type: String
    },
    skillset6: {
        type: String
    },
    currentOrg: {
        type: String
    },
    yearsExperience: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    saltSecret: String
});

// Custom validation for email
professionalSchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
professionalSchema.pre('save', function(next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
professionalSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

professionalSchema.methods.generateJwt = function() {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXP
        });
}

const Professional = mongoose.model('Professional', professionalSchema, 'Professional_info');

module.exports = Professional; 