const mongoose = require("mongoose");
const url = "mongodb+srv://admin_caramel:69120@NivaN@cluster0-cyssi.mongodb.net/test?retryWrites=true&w=majority/caramelitacademy";

const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.log(err));

module.exports = connect;
