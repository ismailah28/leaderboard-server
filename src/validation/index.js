const createError = require('http-errors');

const validate = async (schema, payload) => {
  try {
    await schema.validateAsync(payload, { abortEarly: false });
  } catch (e) {
    throw createError(400, 'Bad Request');
  }
};

module.exports = validate;
