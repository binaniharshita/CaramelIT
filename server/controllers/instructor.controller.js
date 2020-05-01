require('../models/instructor.model');
const mongoose = require('mongoose');

const Instructor = mongoose.model('Instructor');

module.exports.register = (req, res, next) => {
    var instructor = new Instructor();
    instructor.firstName = req.body.firstName;
    instructor.lastName = req.body.lastName;
    instructor.emailAddress = req.body.emailAddress;
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