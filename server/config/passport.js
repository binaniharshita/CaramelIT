const passport = require('passport');
const mongoose = require('mongoose');

const studentLocalStrategy = require('passport-local').Strategy;
const professionalLocalStrategy = require('passport-local').Strategy;
const instructorLocalStrategy = require('passport-local').Strategy;
const corporateLocalStrategy = require('passport-local').Strategy;
const universityLocalStrategy = require('passport-local').Strategy;
const adminLocalStrategy = require('passport-local').Strategy;

var Student = mongoose.model('Student');
var Professional = mongoose.model('Professional');
var Instructor = mongoose.model('Instructor');
var Corporate = mongoose.model('Corporate');
var University = mongoose.model('University');
var Admin = mongoose.model('Admin');

//Student passport
passport.use('studentLocal',
    new studentLocalStrategy({ usernameField: 'emailAddress' },
        (username, password, done) => {
            Student.findOne({ emailAddress: username },
                (err, student) => {
                    if (err)
                        return done(err);
                    // unknown student
                    else if (!student)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!student.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, student);
                });
        })
);

//professional passport 
passport.use('professionalLocal',
    new professionalLocalStrategy({ usernameField: 'emailAddress' },
        (username, password, done) => {
            Professional.findOne({ emailAddress: username },
                (err, professional) => {
                    if (err)
                        return done(err);
                    // unknown student
                    else if (!professional)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!professional.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, professional);
                });
        })
);

//Instructor passport
passport.use('instructorLocal',
    new instructorLocalStrategy({ usernameField: 'emailAddress' },
        (username, password, done) => {
            Instructor.findOne({ emailAddress: username },
                (err, instructor) => {
                    if (err)
                        return done(err);
                    // unknown student
                    else if (!instructor)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!instructor.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, instructor);
                });
        })
);
//Corporate passport
passport.use('corporateLocal',
    new corporateLocalStrategy({ usernameField: 'emailAddress' },
        (username, password, done) => {
            Corporate.findOne({ emailAddress: username },
                (err, corporate) => {
                    if (err)
                        return done(err);
                    // unknown student
                    else if (!corporate)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!corporate.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, corporate);
                });
        })
);
//University passport
passport.use('universityLocal',
    new universityLocalStrategy({ usernameField: 'emailAddress' },
        (username, password, done) => {
            University.findOne({ emailAddress: username },
                (err, university) => {
                    if (err)
                        return done(err);
                    // unknown student
                    else if (!university)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!university.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, university);
                });
        })
);
//Admin passport
passport.use('adminLocal',
    new adminLocalStrategy({ usernameField: 'emailAddress' },
        (username, password, done) => {
            Admin.findOne({ emailAddress: username },
                (err, admin) => {
                    if (err)
                        return done(err);
                    // unknown student
                    else if (!admin)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!admin.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, admin);
                });
        })
);