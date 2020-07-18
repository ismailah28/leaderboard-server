const Joi = require('@hapi/joi');

const name = Joi.string().min(3).max(128).trim().lowercase().required();
const description = Joi.string().min(3).max(128).trim().lowercase();

const fileSchema = Joi.object({
  name,
  description,
});

module.exports = fileSchema;
