let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let uuid = require('uuid/v4');
let session = require('express-session');

let indexRouter = require('./routes/index');
let restRouter = require('./routes/restRouter');
let driverRouter = require('./routes/driverRouter');
let cons = require('consolidate');
let app = express();

let dotenv = require('dotenv');
dotenv.config();

// View engine setup (use html).
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  genid: (req) => { return uuid(); },
  cookie: { maxAge: 10 * 60 * 6000 }, // expires after 10m
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/rest', express.static(path.join(__dirname, 'public')));
app.use('/driver', express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/rest', restRouter);
app.use('/driver', driverRouter);

// Catch 404 and forward to error handler.
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler.
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
