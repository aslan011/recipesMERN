export
const Validator = require("validator");
const isEmpty = require("is-empty");
import { Credentials, Errors } from '../interfaces/validation';

module.exports = function validateLoginInput(data : Credentials) {
  let errors: Errors = {};
  
  // Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  
  // Username check
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  } 

  // Password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};