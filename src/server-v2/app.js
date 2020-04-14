var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dataRouter = require('./routes/data');
var tyxzRouter = require('./routes/tyxz');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/v2', express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/v2/users', usersRouter);
app.use('/v2/data', dataRouter);
app.use('/v2/data', tyxzRouter);

module.exports = app;
