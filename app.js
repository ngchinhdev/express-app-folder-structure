const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", ['']);
    next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
    res.send('Hello from E-BookingHealthcare');
});

app.use(function (req, res, next) {
    next(createError(404, 'Endpoint not found.'));
});

app.use((err, req, res, next) => {
    res.send(err);
});

module.exports = app;