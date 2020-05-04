require('../models/instructor.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Instructor = mongoose.model('Instructor');

module.exports.register = (req, res, next) => {
    var instructor = new Instructor();
    instructor.firstName = req.body.firstName;
    instructor.lastName = req.body.lastName;
    instructor.emailAddress = req.body.emailAddress;
    instructor.password = req.body.password;
    instructor.mobileNumber = req.body.mobileNumber;
    instructor.subjects = req.body.subjects;
    instructor.workingHours = req.body.workingHours;
    instructor.experience = req.body.experience;
    instructor.profileDetails = req.body.profileDetails;
    instructor.createdAt = req.body.createdAt;
    instructor.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('instructorLocal', (err, instructor, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered instructor
        if (instructor) return res.status(200).json({ "token": instructor.generateJwt() });
        // unknown or wrong password
        else return res.status(401).json(info);
    })(req, res);
}

module.exports.instructorProfile = (req, res, next) =>{
    Instructor.findOne({ _id: req._id },
        (err, instructor) => {
            if (!instructor)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, instructor : _.pick(instructor,['firstName','emailAddress']) });
        }
    );
}