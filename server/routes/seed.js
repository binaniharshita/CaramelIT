const express = require('express');
const router = express.Router();

//Course model
const Course = require('../models/course/course.model');

//Create Course
router.route('/save').post((req, res) => {
  const file=require('../Content.json');
  const crs = new Course({
    title:req.body.title,
    description:req.body.description,
    module:req.body.module,
    category:req.body.category,
    subcategory:req.body.subcategory,
    content: file
});   
  crs.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Course Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;