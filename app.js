const express = require('express');
const morgan = require('morgan');
const moduleRouter = require('./routes/moduleRoutes');

const app = express();

// MIDDLEWARE

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ROUTES

app.use('/api/v1/modules', moduleRouter);

module.exports = app;
