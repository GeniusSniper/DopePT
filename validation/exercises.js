const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateExerciseInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';
  data.instructions = validText(data.instructions) ? data.instructions : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Desription field is required';
  }

  if (Validator.isEmpty(data.instructions)) {
    errors.instructions = 'Instructions field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};