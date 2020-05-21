const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
    name: {
        type: String
    },
    lessons: [{
        S_No: {
            type: String,
            //required: true
        },
        Lessons_List: {
            type: String,
            //required: true
        },
        Lessons_Time: {
            type: String,
            //required: true
        }
    }],
    scenarios: [{
        'S_No': {
            type: String,
            // required: true
        },
        'Scenarios_List': {
            type: String,
            //required: true
        },
        'Scenarios_Time': {
            type: String,
            //required: true
        }
    }],
    assesment: [{
        'S_No': {
            type: String,
            //required: true
        },
        'Tests_List': {
            type: String,
            //: true
        },
        'Tests_Time': {
            type: String,
            //required: true
        }
    }],
    project: [{
        'S_No': {
            type: String,
            // required: true
        },
        'Projects_List': {
            type: String,
            // required: true
        },
        'Projects_Time': {
            type: String,
            // required: true
        }
    }]
});



module.exports = ModuleSchema;