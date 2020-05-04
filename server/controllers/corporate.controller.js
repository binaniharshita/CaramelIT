require('../models/corporate.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Corporate = mongoose.model('Corporate');

module.exports.register = (req, res, next) => {
    var corporate = new Corporate();
    corporate.corporateName = req.body.organisationName;
    corporate.emailAddress = req.body.emailAddress;
    corporate.password = req.body.password;
    corporate.mobileNumber = req.body.mobileNumber;
    corporate.others = req.body.others;
    corporate.createdAt = req.body.createdAt;
    corporate.save((err, doc) => {
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
    passport.authenticate('corporateLocal', (err, corporate, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered corporationm
        if (corporate) return res.status(200).json({ "token": corporate.generateJwt() });
        // unknown or wrong password
        else return res.status(401).json(info);
    })(req, res);
}

module.exports.corporateProfile = (req, res, next) =>{
    Corporate.findOne({ _id: req._id },
        (err, corporate) => {
            if (!corporate)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, corporate : _.pick(corporate,['corporateName','emailAddress']) });
        }
    );
}