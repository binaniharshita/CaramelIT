const express = require('express');
const router = express.Router();
const multer = require('multer');
router.get('/', (req, res) => res.send('Use Postman'));

const convert = require('./convert.route');

//Upload file path
const FILE_PATH = './uploads';

//Storage
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, FILE_PATH)
    },
    filename: function(req, file, cb) {
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
        // allow doc only
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Only doc are allowed.'), false);
        }
        cb(null, true);
    }
});

//Upload single file

router.post('/upload/lessons', upload.single("lesson"), async(req, res) => {
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

router.post('/upload/scenarios', upload.single("scenario"), async(req, res) => {
    try {
        const scenario = req.file;
        // make sure file is available
        if (!scenario) {
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
                    name: scenario.originalname,
                    mimetype: scenario.mimetype,
                    size: scenario.size
                }
            });
            res.end();
            convert.scenario();
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/projects', upload.single("project"), async(req, res) => {
    console.log('Hello');
    try {
        const project = req.file;
        // make sure file is available
        if (!project) {
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
                    name: project.originalname,
                    mimetype: project.mimetype,
                    size: project.size
                }
            });
            res.end();
            convert.project();
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/upload/tests', upload.single("test"), async(req, res) => {
    try {
        const test = req.file;
        // make sure file is available
        if (!test) {
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
                    name: test.originalname,
                    mimetype: test.mimetype,
                    size: test.size
                }
            });
            res.end();
            convert.test();
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
