const express = require("express");
const multer = require("multer");

const Category = require("../models/course/category.model");
const SubCategory = require("../models/course/subcategory.model");

const router = express.Router();

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "./images/subcategory");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});

router.post(
    "",
    multer({ storage: storage }).single("image"),
    (req, res, next) => {
        const url = req.protocol + "://" + req.get("host");
        const subcategory = new SubCategory({
            title: req.body.title,
            description: req.body.description,
            imagePath: url + "/images/category/" + req.file.filename,
            catId: req.body.catId,
        });
        subcategory.save().then(createdSubCategory => {
            Category.findById({ _id: subcategory.catId }, function(err, doc) {
                if (err) { console.log("Error with updateing "); return; }
                console.log(doc);
                doc.noOfSubCategories = doc.noOfSubCategories + 1;
                doc.subCatList.push(subcategory._id);
                doc.save();
            });

            res.status(201).json({
                message: "Sub-Program added successfully",
                subCategory: {
                    ...createdSubCategory,
                    id: createdSubCategory._id
                }
            });
        });
    }
);
router.put(
    "/:id",
    multer({ storage: storage }).single('image'),
    (req, res, next) => {
        let imagePath = req.body.imagePath;
        if (req.file) {
            const url = req.protocol + "://" + req.get("host");
            imagePath = url + "/images/" + req.file.filename
        }
        const subcategory = new SubCategory({
            _id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            imagePath: imagePath,
            catId: req.body.catId
        });
        console.log(subcategory);
        SubCategory.updateOne({ _id: req.params.id }, subcategory).then(result => {
            res.status(200).json({ message: "Update successful!" });
        });
    }
);

router.get("", (req, res, next) => {
    SubCategory.find().then(documents => {
        res.status(200).json({
            message: "Sub-Program fetched successfully!",
            subcategories: documents
        });
    });
});

router.get("/:id", (req, res, next) => {
    SubCategory.findById(req.params.id).then(subCategory => {
        if (subCategory) {
            res.status(200).json(subCategory);
        } else {
            res.status(404).json({ message: "sub program not found!" });
        }
    });
});

router.delete("/:id", (req, res, next) => {
    SubCategory.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Sub Program deleted!" });
    });
});

module.exports = router;