var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var infoRouter = require('./routes/info');
var imagesRouter = require('./routes/images');
var dataRouter = require('./routes/data');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/v1/users', usersRouter);
app.use('/v1/info', infoRouter);
app.use('/v1/images', imagesRouter);
app.use('/v1/data', dataRouter);

module.exports = app;