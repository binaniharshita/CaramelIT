const express = require('express');
const router = express.Router();
const multer = require('multer');
router.get('/', (req, res) => res.send('Use Postman'));

//Upload file path
const FILE_PATH = './uploads';

//Storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
// Uploads is the Upload_folder_name 
        cb(null, FILE_PATH)
    },
    filename: function (req, file, cb) {
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
router.post('/upload', upload.single("document"), async (req, res, callback) => {
    try {
        const document = req.file;
        // make sure file is available
        if (!document) {
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
                    name: document.originalname,
                    mimetype: document.mimetype,
                    size: document.size
                }
            });
            res.end();
            require('./convert');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;