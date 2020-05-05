const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required : true
    },
    emailAddress: {
        type: String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required : true
    },
    mobileNumber: {
        type: Number
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// Custom validation for email
adminSchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
adminSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

//Methods
adminSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

adminSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;