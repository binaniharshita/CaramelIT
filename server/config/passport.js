const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Student = mongoose.model('Student');

passport.use(
    new localStrategy({ usernameField: 'emailAddress' },
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