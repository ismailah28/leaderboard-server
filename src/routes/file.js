const router = require('express').Router();

const { uploadFile } = require('../handlers/file');
const multerConfig = require('../config/multer-config');

router.route('/').post(multerConfig, uploadFile);

module.exports = router;
