const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
var morgan = require('morgan');
const passport = require("passport");
var indexRouter = require('./routes/index');
import {Express, Request, Response, NextFunction} from 'express';

var app: Express = express();

interface ResponseError extends Error {
  status?: number;
}

const mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("connected to db"))

const db = mongoose.connection
mongoose.set('debug', true);

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());

// Passport middleware
app.use(passport.initialize());// Passport config
require("./config/passport")(passport);

app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use('/', indexRouter);

// error handler
app.use(function(err: ResponseError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
