const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Model
const Course = require('../course-models/course.model');
const Module = require('../course-models/modules.model');

//Create Course
router.route('/create').post((req, res) => {
  //Data
  const mod = require('../data/Module.json');

  var crs = new Course({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    subcategory: req.body.subcategory,
    price: req.body.price,
    modules: mod
  });
  crs.save((err, doc) => {
    if (!err) { 
      res.send(doc); 
      console.log("Course saved in DB");
      //Drop the models collection, so another course can be added
      mongoose.connection.collections['modules'].drop( function(err) {
        console.log('collection dropped');
    });
    }
    else { console.log('Error in Course Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;