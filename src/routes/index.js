const express = require('express');
const { response } = require('../utils/response');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    response(res, 200, true, 'Hello World', {});
  } catch (err) {
    next(new Error(err.message));
  }
});

module.exports = router;
