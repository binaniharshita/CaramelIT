require('../models/professional.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const professionalpasswordResetToken = require('../models/Reset Tokens/professional-reset-token.model');
const Professional = mongoose.model('Professional');

module.exports.register = (req, res, next) => {
    var professional = new Professional();
    professional.firstName = req.body.firstName;
    professional.lastName = req.body.lastName;
    professional.emailAddress = req.body.emailAddress;
    professional.password = req.body.password;
    professional.userRole = req.body.userRole;
    professional.mobileNumber = req.body.mobileNumber;
    professional.dateOfBirth = req.body.dateOfBirth;
    professional.country = req.body.country;
    professional.state = req.body.state;
    professional.noOfSkill = req.body.noOfSkill;
    professional.skillset = req.body.skillset;
    professional.skill1 = req.body.skill1;
    professional.skill2 = req.body.skill2;
    professional.skill3 = req.body.skill3;
    professional.skill4 = req.body.skill4;
    professional.skill5 = req.body.skill5;
    professional.skill6 = req.body.skill6;
    professional.createdAt = req.body.createdAt;
    professional.save((err, doc) => {
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
    passport.authenticate('professionalLocal', (err, professional, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered professional
        if (professional) return res.status(200).json({ "token": professional.generateJwt() });
        // unknown or wrong password
        else return res.status(401).json(info);
    })(req, res);
}

module.exports.professionalProfile = (req, res, next) => {
    Professional.findOne({ _id: req._id },
        (err, professional) => {
            if (!professional)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, professional: _.pick(professional, ['firstName', 'lastName', 'emailAddress']) });
        }
    );
}

//Reset password Logic
module.exports.ResetPassword = async(req, res) => {
    if (!req.body.emailAddress) {
        return res
            .status(500)
            .json({ message: 'Email is required' });
    }
    const professional = await Professional.findOne({
        emailAddress: req.body.emailAddress
    });
    if (!professional) {
        return res
            .status(409)
            .json({ message: 'Email does not exist' });
    }
    var resettoken = new professionalpasswordResetToken({ _professionalId: professional._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function(err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
        professionalpasswordResetToken.find({ _professionalId: professional._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
        res.status(200).json({ message: 'Reset Password successfully.' });
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: 'user',
                pass: 'password'
            }
        });
        var mailOptions = {
            to: professional.emailAddress,
            from: 'shristdas@gmail.com',
            subject: 'Node.js Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        }
        transporter.sendMail(mailOptions, (err, info) => {
            console.log("Token " + resettoken.resettoken);
        })
    })
}

module.exports.ValidPasswordToken = async(req, res) => {
    if (!req.body.resettoken) {
        return res
            .status(500)
            .json({ message: 'Token is required' });
    }
    const professional = await professionalpasswordResetToken.findOne({
        resettoken: req.body.resettoken
    });
    if (!professional) {
        return res
            .status(409)
            .json({ message: 'Invalid URL' });
    }
    
    Professional.findOneAndUpdate({ _id: professional._professionalId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
    }).catch((err) => {
        return res.status(500).send({ msg: err.message });
    });
}

module.exports.NewPassword = async(req, res) => {
    professionalpasswordResetToken.findOne({ resettoken: req.body.resettoken }, function(err, professionalToken, next) {
        if (!professionalToken) {
            return res
                .status(409)
                .json({ message: 'Token has expired' });
        }

        Professional.findOne({
            _id: professionalToken._professionalId
        }, function(err, professionalEmail, next) {
            if (!professionalEmail) {
                return res
                    .status(409)
                    .json({ message: 'Email not registered' });
            }
            return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                if (err) {
                    return res
                        .status(400)
                        .json({ message: 'Error hashing password' });
                }
                professionalEmail.password = hash;
                professionalEmail.save(function(err) {
                    if (err) {
                        return res
                            .status(400)
                            .json({ message: 'Password can not reset.' });
                    } else {
                        professionalToken.remove();
                        return res
                            .status(201)
                            .json({ message: 'Password reset successfully' });
                    }

                });
            });
        });

    })
}