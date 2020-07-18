const createError = require('http-errors');
const asyncHandler = require('express-async-handler');

const { response } = require('../utils/response');
const validate = require('../validation');
const fileSchema = require('../validation/file');
const File = require('../models/file');

const uploadFile = asyncHandler(async (req, res, next) => {
  if (!req.file) return next(createError(400, 'File not found'));

  await validate(fileSchema, req.body);

  req.body.url = `${req.protocol}://${req.hostname}/${req.file.path}`;

  const file = await File.create(req.body);

  return response(res, 201, true, 'File uploaded successfully!', file);
});

module.exports = { uploadFile };
