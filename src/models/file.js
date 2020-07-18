const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a file name'],
    unique: true,
  },
  url: {
    type: String,
    required: [true, 'File url required'],
    unique: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

fileSchema.set('toJSON', {
  transform: (doc, { __v, ...rest }, options) => rest,
});

module.exports = mongoose.model('File', fileSchema);
