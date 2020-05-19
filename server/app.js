const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200/");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, DELETE, POST, PATCH, OPTIONS");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


require('./config/config');
const studRoutes = require('./routes/index.router');
const moduleRoute = require('./routes/module.route');
//Passport
require('./config/passport');
//Mongo Connect
const connect = require('./dbconnect');

const studCart = require('./routes/studentcart.router');



//Body Parser, Cors, Cookie parser
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//Passport Middleware
app.use(passport.initialize());
//Route
// app.use('/upload', require('./routes/upload.route'))
app.use('/api', studRoutes);
app.use('/api/module', moduleRoute);
// app.use('/course', require('./routes/upload'));
// app.use('/api', require('./routes/upload'));
// app.use('/course', require('./routes/seed'));

//Cart
app.use('/api/studcart', studCart);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));