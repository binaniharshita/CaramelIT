require('../models/instructor.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const passwordResetToken = require('../models/Reset Tokens/instructor-reset-token.model');

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
                return res.status(200).json({ status: true, instructor : _.pick(instructor,['firstName','lastName','emailAddress']) });
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
    const instructor = await Instructor.findOne({
    emailAddress:req.body.emailAddress
    });
    if (!instructor) {
    return res
    .status(409)
    .json({ message: 'Email does not exist' });
    }
    var resettoken = new passwordResetToken({ _instructorId: instructor._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
    passwordResetToken.find({ _instructorId: instructor._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
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
    to: instructor.emailAddress,
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
        const instructor = await passwordResetToken.findOne({
        resettoken: req.body.resettoken
        });
        if (!instructor) {
        return res
        .status(409)
        .json({ message: 'Invalid URL' });
        }
        Instructor.findOneAndUpdate({ _id: instructor._instructorId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
        }).catch((err) => {
        return res.status(500).send({ msg: err.message });
        });
    }

    module.exports.NewPassword = async(req, res) => {
            passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, instructorToken, next) {
              if (!instructorToken) {
                return res
                  .status(409)
                  .json({ message: 'Token has expired' });
              }
        
              Instructor.findOne({
                _id: instructorToken._instructorId
              }, function (err, instructorEmail, next) {
                if (!instructorEmail) {
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
                  instructorEmail.password = hash;
                  instructorEmail.save(function (err) {
                    if (err) {
                      return res
                        .status(400)
                        .json({ message: 'Password can not reset.' });
                    } else {
                      studentToken.remove();
                      return res
                        .status(201)
                        .json({ message: 'Password reset successfully' });
                    }
        
                  });
                });
              });
        
            })
        }