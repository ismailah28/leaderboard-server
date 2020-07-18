const createError = require('http-errors');
const express = require('express');

const errorHandler = require('./utils/error-handler');
const setupMiddlewares = require('./config/middlewares');
const indexRouter = require('./routes');
const fileRoute = require('./routes/file');

const app = express();

setupMiddlewares(app);

// app.use(express.static('uploads/'));

app.use('/v1', indexRouter);
app.use('/v1/file', fileRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'Endpoint not found'));
});

// central error handler
app.use(errorHandler);

module.exports = app;
