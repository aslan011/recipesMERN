"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login"); // Load User model
// @route POST api/users/register
// @desc Register user
// @access Public
exports.register = (req, res) => {
    // Form validation 
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    exports.User.findOne({ username: req.body.username }).then((user) => {
        if (user) {
            return res.status(400).json({ response: "Username already exists" });
        }
        else {
            const newUser = new exports.User({
                username: req.body.username,
                password: req.body.password
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err)
                        throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => res.json({ response: "Registration successful" }))
                        .catch((err) => console.log(err));
                });
            });
        }
    });
};
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
exports.login = (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;
    // Find user by username
    exports.User.findOne({ username }).then((user) => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ response: "Username not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    username: user.username
                }; // Sign token
                jwt.sign(payload, process.env.secretOrKey, {
                    expiresIn: 31556926 // 1 year in seconds
                }, (_err, token) => {
                    res.json({
                        username: user.username,
                        success: true,
                        token: "Bearer " + token,
                        response: "Login successful"
                    });
                });
            }
            else {
                return res
                    .status(400)
                    .json({ response: "Password incorrect" });
            }
        });
    });
};
//# sourceMappingURL=userController.js.map