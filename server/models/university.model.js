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
    password: {
        type: String,
        required : true
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

// Events
universitySchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
universitySchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

universitySchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

const University = mongoose.model('University', universitySchema);

module.exports = University;