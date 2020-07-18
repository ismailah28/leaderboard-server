const router = require('express').Router();

const { uploadFile, getAllFiles, getFileById } = require('../handlers/file');
const multerConfig = require('../config/multer-config');

router.route('/').get(getAllFiles).post(multerConfig, uploadFile);
router.route('/:fileId').get(getFileById);

module.exports = router;
