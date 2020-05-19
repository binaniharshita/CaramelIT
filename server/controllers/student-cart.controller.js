const express = require('express');
const studentCartRoute = express.Router();
var ObjectId = require('mongodb').ObjectID;

// Cart model
let Cart = require('../models/student-cart.model');


// Add To Cart
studentCartRoute.route('/create').post((req, res, next) => {
  Cart.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//Get All coursers
studentCartRoute.route('/findall').get((req, res) => {
  Cart.find((error, data) => {
    if (error) {
      return console.log('error'+JSON.stringify(error,undefined,20));
    } else {
      res.json(data)
    }
  })
})

// Get single employee
studentCartRoute.route('/find/:id').get((req, res) => {
  // Cart.findOne({"_id": new ObjectId(req.params.id)}, (error, data) => {
    Cart.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data,'data')
      res.json(data)
    }
  })
})
// Update cart
studentCartRoute.route('/update/:id').put((req, res, next) => {
    Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  })

studentCartRoute.route('/delete/:course_id').delete((req, res, next) => {
    Cart.findOneAndRemove(req.params.course_id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    })
  })

module.exports = studentCartRoute;

