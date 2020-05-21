var mammoth = require("mammoth");
const { Tabletojson: tabletojson } = require('tabletojson');
const fs = require('fs');
"use strict";
//Convert into JSON
const convert_lesson = () => {
    mammoth.convertToHtml({ path: "./uploads/lesson.docx" })
        .then(function(result) {
            const html = result.value; // The generated HTML
            const converted = tabletojson.convert(html, { useFirstRowForHeadings: true });
            var reswe = converted[0];
            fs.writeFile('data/lessons.json', JSON.stringify(reswe), function(err) {
                if (err) throw err;
                console.log('Lesson Saved!');
            });
            var messages = result.messages; // Any messages, such as warnings during conversion
        }).done();
};

const convert_scenarios = () => {
    mammoth.convertToHtml({ path: "./uploads/scenario.docx" })
        .then(function(result) {
            const html = result.value; // The generated HTML
            const converted = tabletojson.convert(html, { useFirstRowForHeadings: true });
            var reswe = converted[0];
            fs.writeFile('data/scenarios.json', JSON.stringify(reswe), function(err) {
                if (err) throw err;
                console.log('Scenario Saved!');
            });
            var messages = result.messages; // Any messages, such as warnings during conversion
        }).done();
};
const convert_tests = () => {
    mammoth.convertToHtml({ path: "./uploads/test.docx" })
        .then(function(result) {
            const html = result.value; // The generated HTML
            const converted = tabletojson.convert(html, { useFirstRowForHeadings: true });
            var reswe = converted[0];
            fs.writeFile('data/tests.json', JSON.stringify(reswe), function(err) {
                if (err) throw err;
                console.log('Test Saved!');
            });
            var messages = result.messages; // Any messages, such as warnings during conversion
        }).done();
};

const convert_projects = () => {
    mammoth.convertToHtml({ path: "./uploads/project.docx" })
        .then(function(result) {
            const html = result.value; // The generated HTML
            const converted = tabletojson.convert(html, { useFirstRowForHeadings: true });
            var reswe = converted[0];
            fs.writeFile('data/projects.json', JSON.stringify(reswe), function(err) {
                if (err) throw err;
                console.log('Project Saved!');
            });
            var messages = result.messages; // Any messages, such as warnings during conversion
        }).done();
}

//After module collection saved in db, taking data from it
const mongoose = require('mongoose');

//Model
const ModuleSchema = require('../models/course/modules.model');
const Module = mongoose.model('Module', ModuleSchema);

const save_module = () => {
    Module.find((err, docs) => {
        if (!err) {
            fs.writeFile('data/Module.json', JSON.stringify(docs), function(err) {
                if (err) throw err;
                console.log('Saved!');
            });
        } else { console.log('Error in Retriving Students :' + JSON.stringify(err, undefined, 2)); }
    });
};

module.exports = {
    lesson: convert_lesson,
    scenario: convert_scenarios,
    project: convert_projects,
    test: convert_tests,
    module: save_module
};
