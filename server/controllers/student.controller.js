require('../models/student.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const passwordResetToken = require('../models/student-reset-token.model');
const Student = mongoose.model('Student');

module.exports.register = (req, res, next) => {
    var student = new Student();
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.emailAddress = req.body.emailAddress;
    student.password = req.body.password;
    student.mobileNumber = req.body.mobileNumber;
    student.dateOfBirth = req.body.dateOfBirth;
    student.country = req.body.country;
    student.state = req.body.state;
    student.collegeName = req.body.collegeName;
    student.skillset = req.body.skillset;
    student.createdAt = req.body.createdAt;
    student.save((err, doc) => {
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
    passport.authenticate('studentLocal', (err, student, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered student
        if (student) return res.status(200).json({ "token": student.generateJwt() });
        // unknown or wrong password
        else return res.status(401).json(info);
    })(req, res);
}

module.exports.studentProfile = (req, res, next) =>{
    Student.findOne({ _id: req._id },
        (err, student) => {
            if (!student)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, student : _.pick(student,['firstName','lastName','emailAddress']) });
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
    const student = await Student.findOne({
    emailAddress:req.body.emailAddress
    });
    if (!student) {
    return res
    .status(409)
    .json({ message: 'Email does not exist' });
    }
    var resettoken = new passwordResetToken({ _studentId: student._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
    passwordResetToken.find({ _studentId: student._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
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
    to: student.emailAddress,
    from: 'shristdas@gmail.com',
    subject: 'Node.js Password Reset',
    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
    'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    }
    transporter.sendMail(mailOptions, (err, info) => {
    })
    })
    }
    
    module.exports.ValidPasswordToken = async(req, res) => {
        if (!req.body.resettoken) {
        return res
        .status(500)
        .json({ message: 'Token is required' });
        }
        const student = await passwordResetToken.findOne({
        resettoken: req.body.resettoken
        });
        if (!student) {
        return res
        .status(409)
        .json({ message: 'Invalid URL' });
        }
        Student.findOneAndUpdate({ _id: student._studentId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
        }).catch((err) => {
        return res.status(500).send({ msg: err.message });
        });
    }

    module.exports.NewPassword = async(req, res) => {
            passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, studentToken, next) {
              if (!studentToken) {
                return res
                  .status(409)
                  .json({ message: 'Token has expired' });
              }
        
              Student.findOne({
                _id: studentToken._studentId
              }, function (err, studentEmail, next) {
                if (!studentEmail) {
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
                  studentEmail.password = hash;
                  studentEmail.save(function (err) {
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