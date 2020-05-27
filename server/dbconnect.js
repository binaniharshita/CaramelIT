const mongoose = require("mongoose");
const url = "mongodb+srv://admin_caramel:69120@NivaN@cluster0-cyssi.mongodb.net/caramelitacademy";
// mongodb://localhost:27017/caramelitacademy
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.log(err));

module.exports = connect;
