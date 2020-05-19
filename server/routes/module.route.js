const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const convert = require('./convert.route');

//Model
const ModuleSchema = require('../models/course/modules.model');
const Module = mongoose.model('Module', ModuleSchema);

router.route('/create').get((req, res) => {
    console.log('Create under module');
})

// Create Module
router.route('/create').post((req, res) => {
    //Data
    const lessons = require('../data/lessons.json');
    const scenarios = require('../data/scenarios.json');
    const projects = require('../data/projects.json');
    const tests = require('../data/tests.json');

    const mds = new Module({
        name: req.body.name,
        lessons: lessons,
        scenarios: scenarios,
        assesment: tests,
        project: projects
    });
    mds.save((err, doc) => {
        if (!err) {
            res.send(doc);
            console.log("Module saved in DB");
            convert.module();
        } else { console.log('Error in Module Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;