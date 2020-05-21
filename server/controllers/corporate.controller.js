require('../models/corporate.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const passwordResetToken = require('../models/Reset Tokens/corporate-reset-token.model');

const Corporate = mongoose.model('Corporate');

module.exports.register = (req, res, next) => {
    var corporate = new Corporate();
    corporate.corporateName = req.body.corporateName;
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
//Reset password Logic
module.exports.ResetPassword = async(req, res)=> {
    if (!req.body.emailAddress) {
    return res
    .status(500)
    .json({ message: 'Email is required' });
    }
    const corporate = await Corporate.findOne({
    emailAddress:req.body.emailAddress
    });
    if (!corporate) {
    return res
    .status(409)
    .json({ message: 'Email does not exist' });
    }
    var resettoken = new passwordResetToken({ _corporateId: corporate._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
    passwordResetToken.find({ _corporateId: corporate._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
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
    to: corporate.emailAddress,
    from: 'mail@gmail.com',
    subject: 'Node.js Password Reset',
    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
    'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    }
    transporter.sendMail(mailOptions, (err, info) => {
      console.log("Mail Sent");
    })
    })
    }
    
    module.exports.ValidPasswordToken = async(req, res) => {
        if (!req.body.resettoken) {
        return res
        .status(500)
        .json({ message: 'Token is required' });
        }
        const corporate = await passwordResetToken.findOne({
        resettoken: req.body.resettoken
        });
        if (!corporate) {
        return res
        .status(409)
        .json({ message: 'Invalid URL' });
        }
        Corporate.findOneAndUpdate({ _id: corporate._corporateId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
        }).catch((err) => {
        return res.status(500).send({ msg: err.message });
        });
    }

    module.exports.NewPassword = async(req, res) => {
            passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, corporateToken, next) {
              if (!corporateToken) {
                return res
                  .status(409)
                  .json({ message: 'Token has expired' });
              }
        
              Corporate.findOne({
                _id: corporateToken._corporateId
              }, function (err, corporateEmail, next) {
                if (!corporateEmail) {
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
                  corporateEmail.password = hash;
                  corporateEmail.save(function (err) {
                    if (err) {
                      return res
                        .status(400)
                        .json({ message: 'Password can not reset.' });
                    } else {
                      corporateToken.remove();
                      return res
                        .status(201)
                        .json({ message: 'Password reset successfully' });
                    }
        
                  });
                });
              });
        
            })
        }