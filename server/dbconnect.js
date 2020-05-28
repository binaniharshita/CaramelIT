const mongoose = require("mongoose");
const url = "mongodb+srv://caramel_it:Admin123%23@projectz-gjuxk.mongodb.net/MEAN_stack?authSource=admin&replicaSet=ProjectZ-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
// mongodb://localhost:27017/caramelitacademy
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.log(err));

module.exports = connect;