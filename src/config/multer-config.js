const multer = require('multer');
const crypto = require('crypto');
const createError = require('http-errors');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      if (err) return cb(err);

      return cb(null, raw.toString('hex') + path.extname(file.originalname));
    });
  },
});

const fileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(csv|json)$/)) {
    return callback(createError('Only csv or json file is allowed'));
  }
  return callback(null, true);
};

module.exports = multer({
  storage,
  fileFilter,
}).single('file');
