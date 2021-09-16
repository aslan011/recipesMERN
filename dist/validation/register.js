"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    debugger;
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    if (exports.Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }
    // Password checks
    if (exports.Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (exports.Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!exports.Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!exports.Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
//# sourceMappingURL=register.js.map