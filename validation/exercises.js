const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateExerciseInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.desription = validText(data.desription) ? data.desription : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.desription)) {
    errors.desription = 'Desription field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};