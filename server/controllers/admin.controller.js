require('../models/admin.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Admin = mongoose.model('Admin');

module.exports.register = (req, res, next) => {
    var admin = new Admin();
    admin.adminName = req.body.adminName;
    admin.emailAddress = req.body.emailAddress;
    admin.password = req.body.password;
    admin.mobileNumber = req.body.mobileNumber;
    admin.createdAt = req.body.createdAt;
    admin.save((err, doc) => {
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
    passport.authenticate('adminLocal', (err, admin, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered corporationm
        if (admin) return res.status(200).json({ "token": admin.generateJwt() });
        // unknown or wrong password
        else return res.status(401).json(info);
    })(req, res);
}

module.exports.adminProfile = (req, res, next) =>{
    Admin.findOne({ _id: req._id },
        (err, admin) => {
            if (!admin)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, admin : _.pick(admin,['adminName','emailAddress']) });
        }
    );
}