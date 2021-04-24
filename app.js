var express = require('express');
var path = require('path');

var router = require('./routes/api')

var app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router)

module.exports = app;
