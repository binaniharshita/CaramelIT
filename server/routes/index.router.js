const jwtHelper = require('../config/jwtHelper');
const express = require('express');
const router = express.Router();

const ctrlStudent = require('../controllers/student.controller');
const ctrlCorporate = require('../controllers/corporate.controller');
const ctrlInstructor = require('../controllers/instructor.controller');
const ctrlUniversity = require('../controllers/university.controller');


router.post('/student-register', ctrlStudent.register);
router.post('/corporate-register', ctrlCorporate.register);
router.post('/instructor-register', ctrlInstructor.register);
router.post('/university-register', ctrlUniversity.register);

router.post('/student-authenticate', ctrlStudent.authenticate);
router.get('/studentProfile',jwtHelper.verifyJwtToken, ctrlStudent.studentProfile);

module.exports = router;