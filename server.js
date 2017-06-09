var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('underscore');
var uploader = express.Router();
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();


// var uploader = require('./uploader');

// ******************************
//         GET HOME PAGE
// ******************************

uploader.get('/');


var app = express();

// view engine setup
 app.set('view engine', null);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));

app.use('/uploader', uploader);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.status(err.status).json({
      message: err.message,
      error: err
    });
  });

app.set('port', appEnv.port);
app.set('ip', appEnv.bind);
app.listen(app.get('port'), app.get('ip'), function () {
    console.log('Server started on: ' + app.get('ip') + ', at port: ' + app.get('port'));
});

module.exports = app;
