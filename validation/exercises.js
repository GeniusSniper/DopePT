const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateExerciseInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';
  data.instructions = validText(data.instructions) ? data.instructions : '';
  data.urls = validText(data.urls) ? data.urls : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.instructions)) {
    errors.instructions = 'Instructions field is required';
  }

  if (Validator.isEmpty(data.urls)) {
    errors.urls = 'Need to select an image';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};