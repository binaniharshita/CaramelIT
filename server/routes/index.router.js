const jwtHelper = require('../config/jwtHelper');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();

// const Course = require('');
const convert = require('./convert.route');
const FILE_PATH = '../uploads';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, FILE_PATH)
    },
    filename: function(req, file, cb) {
        console.log('FILE NAME ROUTE UPLOAD LESSON');
        cb(null, file.fieldname + ".docx")
    }
})

//Configure multer
const upload = multer({
    storage: storage,
    limits: {
        files: 1, // allow up to 5 files per request,
    },
    fileFilter: (req, file, cb) => {
        console.log('FILEFILTTER ROUTE UPLOAD LESSON');
        // allow doc only
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Only doc are allowed.'), false);
        }
        cb(null, true);
    }
});







const ctrlStudent = require('../controllers/student.controller');
const ctrlCorporate = require('../controllers/corporate.controller');
const ctrlInstructor = require('../controllers/instructor.controller');
const ctrlUniversity = require('../controllers/university.controller');
const ctrlAdmin = require('../controllers/admin.controller');
const ctrlCategory = require('../controllers/category.controller');
const ctrlSubCat = require('../controllers/subcategory.controller');
const ctrlCourse = require('../controllers/course.controller');

//Register
router.post('/student-register', ctrlStudent.register);
router.post('/corporate-register', ctrlCorporate.register);
router.post('/instructor-register', ctrlInstructor.register);
router.post('/university-register', ctrlUniversity.register);
router.post('/admin-register', ctrlAdmin.register);

//Login
router.post('/student-authenticate', ctrlStudent.authenticate);
router.get('/studentProfile', jwtHelper.verifyJwtToken, ctrlStudent.studentProfile);

router.post('/instructor-authenticate', ctrlInstructor.authenticate);
router.get('/instructorProfile', jwtHelper.verifyJwtToken, ctrlInstructor.instructorProfile);

router.post('/corporate-authenticate', ctrlCorporate.authenticate);
router.get('/corporateProfile', jwtHelper.verifyJwtToken, ctrlCorporate.corporateProfile);

router.post('/university-authenticate', ctrlUniversity.authenticate);
router.get('/universityProfile', jwtHelper.verifyJwtToken, ctrlUniversity.universityProfile);

router.post('/admin-authenticate', ctrlAdmin.authenticate);
router.get('/adminProfile', jwtHelper.verifyJwtToken, ctrlAdmin.adminProfile);

//Reset Student password
router.post('/student-req-reset-password', ctrlStudent.ResetPassword);
router.post('/student-new-password', ctrlStudent.NewPassword);
router.post('/student-valid-password-token', ctrlStudent.ValidPasswordToken);

//Reset Instructor password
router.post('/instructor-req-reset-password', ctrlInstructor.ResetPassword);
router.post('/instructor-new-password', ctrlInstructor.NewPassword);
router.post('/instructor-valid-password-token', ctrlInstructor.ValidPasswordToken);

//Reset Corporate password
router.post('/corporate-req-reset-password', ctrlCorporate.ResetPassword);
router.post('/corporate-new-password', ctrlCorporate.NewPassword);
router.post('/corporate-valid-password-token', ctrlCorporate.ValidPasswordToken);

//Reset University password
router.post('/university-req-reset-password', ctrlUniversity.ResetPassword);
router.post('/university-new-password', ctrlUniversity.NewPassword);
router.post('/university-valid-password-token', ctrlUniversity.ValidPasswordToken);

//Reset Admin password
router.post('/admin-req-reset-password', ctrlAdmin.ResetPassword);
router.post('/admin-new-password', ctrlAdmin.NewPassword);
router.post('/admin-valid-password-token', ctrlAdmin.ValidPasswordToken);




//Category Routes
router.post('/categories', ctrlCategory.create);
router.get('/categories', ctrlCategory.getResult);
router.put('/categories/:id', ctrlCategory.update);
router.delete('/categories/:id', ctrlCategory.delete);

//subcategory Routes
router.post('/subcategories', ctrlSubCat.create);
router.get('/subcategories', ctrlSubCat.read);
router.put('/subcategories/:id', ctrlSubCat.update);
router.delete('/subcategories/:id', ctrlSubCat.delete);

//course route

router.post('/courses', ctrlCourse.create);
router.get('/courses', ctrlCourse.read);
router.put('/courses/:id', ctrlCourse.update);
router.delete('/courses/:id', ctrlCourse.delete);


router.post('/courses/upload/lesson', upload.single("lesson"), async(req, res) => {
    console.log('POST ROUTE UPLOAD LESSON');
    try {
        const lesson = req.file;
        // make sure file is available
        if (!lesson) {
            res.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            //send response
            res.send({
                status: true,
                message: 'File is uploaded.',
                data: {
                    name: lesson.originalname,
                    mimetype: lesson.mimetype,
                    size: lesson.size
                }
            });
            res.end();
            convert.lesson();
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
router.post('/courses/upload/project', ctrlCourse.uploadProject);
router.post('/courses/upload/scenario', ctrlCourse.uploadScenario);
router.post('/courses/upload/test', ctrlCourse.uploadTest);

module.exports = router;
