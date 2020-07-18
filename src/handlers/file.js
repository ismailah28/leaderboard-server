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

const getAllFiles = asyncHandler(async (req, res, next) => {
  const files = await File.find({});

  if (files && files.length < 1) {
    return response(res, 404, false, 'No file uploaded yet!');
  }
  return response(res, 200, true, 'Files retrieved successfully!', files);
});

const getFileById = asyncHandler(async (req, res, next) => {
  const file = await File.findById(req.params.fileId);

  const message404 = `File with ID: ${req.params.fileId} not found!`;
  if (!file) {
    return response(res, 404, false, message404);
  }

  return response(res, 200, true, 'File retrieved successfully', file);
});

module.exports = { uploadFile, getAllFiles, getFileById };
