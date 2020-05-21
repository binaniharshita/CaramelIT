require('../models/university.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const passwordResetToken = require('../models/Reset Tokens/university-reset-token.model');

const University = mongoose.model('University');

module.exports.register = (req, res, next) => {
    var university = new University();
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
                return res.status(200).json({ status: true, university : _.pick(university,['collegeName','universityName','emailAddress']) });
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
    const university = await University.findOne({
    emailAddress:req.body.emailAddress
    });
    if (!university) {
    return res
    .status(409)
    .json({ message: 'Email does not exist' });
    }
    var resettoken = new passwordResetToken({ _universityId: university._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
    passwordResetToken.find({ _universityId: university._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
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
    to: university.emailAddress,
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
        const university = await passwordResetToken.findOne({
        resettoken: req.body.resettoken
        });
        if (!university) {
        return res
        .status(409)
        .json({ message: 'Invalid URL' });
        }
        University.findOneAndUpdate({ _id: university._universityId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
        }).catch((err) => {
        return res.status(500).send({ msg: err.message });
        });
    }

    module.exports.NewPassword = async(req, res) => {
            passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, universityToken, next) {
              if (!universityToken) {
                return res
                  .status(409)
                  .json({ message: 'Token has expired' });
              }
        
              University.findOne({
                _id: universityToken._universityId
              }, function (err, universityEmail, next) {
                if (!universityEmail) {
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
                  universityEmail.password = hash;
                  universityEmail.save(function (err) {
                    if (err) {
                      return res
                        .status(400)
                        .json({ message: 'Password can not reset.' });
                    } else {
                      universityToken.remove();
                      return res
                        .status(201)
                        .json({ message: 'Password reset successfully' });
                    }
        
                  });
                });
              });
        
            })
        }