"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    // Username check
    if (exports.Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }
    // Password check
    if (exports.Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
//# sourceMappingURL=login.js.map