var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var dataRouter = require('./routes/data');
var tyxzRouter = require('./routes/tyxz');
var collectionRouter = require('./routes/collection');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v2/audios', express.static(path.join(__dirname, 'public/audios')));
app.use('/v2/images', express.static(path.join(__dirname, 'public/images')));

app.use('/v2/users', usersRouter);
app.use('/v2/data', dataRouter);
app.use('/v2/tyxz', tyxzRouter);
app.use('/v2/collection', collectionRouter);


module.exports = app;
