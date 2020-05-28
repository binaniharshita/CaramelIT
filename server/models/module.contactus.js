const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Contact= new Schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
    email : {
        type: String
    },
    program: {
        type: String
    },
    subprogram: {
        type:String
    },
    phone:{
        type: Number
    },
    zip: {
        type: String
    },
    budget: {

        type: String
    },
    
    service: {
        type:String
    },
    states: {
        type:String
    },
    userE: {
        type:String
    }


});
module.exports = mongoose.model('Contact',Contact);