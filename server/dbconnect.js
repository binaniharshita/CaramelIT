const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/caramelitacademy";

const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.log(err));

module.exports = connect;