require('../models/corporate.model');
const mongoose = require('mongoose');

const Corporate = mongoose.model('Corporate');

module.exports.register = (req, res, next) => {
    var corporate = new Corporate();
    corporate.corporateName = req.body.organisationName;
    corporate.emailAddress = req.body.emailAddress;
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