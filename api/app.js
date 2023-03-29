var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const bodyParser = require('body-parser');
const passport = require('passport')
var connectDB = require('./config/dbconnection')
var passportSetup = require('./passport')
var session = require('express-session')

connectDB

var indexRouter = require('./routes/index');
var productRouter = require('./routes/product.js');
var customerRouter = require('./routes/customer')
var companyRouter = require('./routes/company')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(passport.initialize())
// app.use(passport.session())
app.use(session({
    secret: 'JAZZ',
    resave: false,
    saveUninitialized: true
  }));
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/customer', customerRouter);
app.use('/product', productRouter);
app.use('/company', companyRouter);



module.exports = app;
