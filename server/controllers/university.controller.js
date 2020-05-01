require('../models/university.model');
const mongoose = require('mongoose');

const University = mongoose.model('University');

module.exports.register = (req, res, next) => {
    var university = new University();
    university.collegeName = req.body.collegeName;
    university.universityName = req.body.universityName;
    university.emailAddress = req.body.emailAddress;
    university.mobileNumber = req.body.mobileNumber;
    university.country = req.body.country;
    university.state = req.body.state;
    university.skillset = req.body.skillset;
    university.createdAt = req.body.createdAt;
    university.save((err, doc) => {
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