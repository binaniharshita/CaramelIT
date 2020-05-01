const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport'); 

require('./config/config');

const studRoutes = require('./routes/index.router');

//Passport
require('./config/passport');

//Mongo Connect 
const connect = require('./dbconnect');

const app = express();

//Body Parser
app.use(bodyParser.json());

//Cors
app.use(cors());

//Passport Middleware
app.use(passport.initialize());

//Route
app.use('/api', studRoutes);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));