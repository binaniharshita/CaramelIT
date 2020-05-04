const jwtHelper = require('../config/jwtHelper');
const express = require('express');
const router = express.Router();

const ctrlStudent = require('../controllers/student.controller');
const ctrlCorporate = require('../controllers/corporate.controller');
const ctrlInstructor = require('../controllers/instructor.controller');
const ctrlUniversity = require('../controllers/university.controller');

//Register
router.post('/student-register', ctrlStudent.register);
router.post('/corporate-register', ctrlCorporate.register);
router.post('/instructor-register', ctrlInstructor.register);
router.post('/university-register', ctrlUniversity.register);

//Login
router.post('/student-authenticate', ctrlStudent.authenticate);
router.get('/studentProfile',jwtHelper.verifyJwtToken, ctrlStudent.studentProfile);

router.post('/instructor-authenticate', ctrlInstructor.authenticate);
router.get('/instructorProfile',jwtHelper.verifyJwtToken, ctrlInstructor.instructorProfile);

router.post('/corporate-authenticate', ctrlCorporate.authenticate);
router.get('/corporateProfile',jwtHelper.verifyJwtToken, ctrlCorporate.corporateProfile);

router.post('/university-authenticate', ctrlUniversity.authenticate);
router.get('/universityProfile',jwtHelper.verifyJwtToken, ctrlUniversity.universityProfile);

//Reset Student password
router.post('/student-req-reset-password', ctrlStudent.ResetPassword);
router.post('/student-new-password', ctrlStudent.NewPassword);
router.post('/student-valid-password-token', ctrlStudent.ValidPasswordToken);


module.exports = router;