// below are the dependent modules that we require for this project
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// api import for logging all request to console
const morgan = require('morgan');

// below is the routes defined for the project
const api = require('./server/routes/api');

// port on which the mean stack applicaiton will run
const port = 3000;

// application-wide instances
const app = express();

// inform express about the placement of angular code
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log every request to the console
app.use(morgan('dev'));

// informing express about how to use pre-defined routes(see const api = ....)
app.use('/api', api);

// define the default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// finally we have to listen on the port defined previously for all the incoming requests
app.listen(port, function () {
    console.log("Service started on http://localhost:" + port);
});