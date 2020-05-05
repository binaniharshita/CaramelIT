require('../models/university.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const University = mongoose.model('University');

module.exports.register = (req, res, next) => {
    var university = new University();
    university.user_type = req.body.user_type; //only for checking something
    university.collegeName = req.body.collegeName;
    university.universityName = req.body.universityName;
    university.emailAddress = req.body.emailAddress;
    university.password = req.body.password;
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
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('universityLocal', (err, university, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered university
        if (university) return res.status(200).json({ "token": university.generateJwt() });
        // unknown or wrong password
        else return res.status(401).json(info);
    })(req, res);
}

module.exports.universityProfile = (req, res, next) =>{
    University.findOne({ _id: req._id },
        (err, university) => {
            if (!university)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, university : _.pick(university,['user_type','collegeName','universityName','emailAddress']) });
        }
    );
}