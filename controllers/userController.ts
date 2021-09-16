export
const User = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");// Load User model
import { Request, Response } from 'express';
import { UserModel } from '../interfaces/mongoDb';

// @route POST api/users/register
// @desc Register user
// @access Public

exports.register = (req: Request, res: Response) => {
    // Form validation 
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    User.findOne({ username: req.body.username }).then((user: UserModel) => {
      if (user) {
        return res.status(400).json({ response: "Username already exists" });
      } 
      
      else {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password
        });
        
        // Hash password before saving in database
        bcrypt.genSalt(10, (err: Error, salt: string | number) => {
          bcrypt.hash(newUser.password, salt, (err: Error, hash: string) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user: UserModel) => res.json({response: "Registration successful"}))
              .catch((err: Error) => console.log(err));
          });
        });
      }
    });
  };

  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

exports.login = (req: Request, res: Response) => {
    // Form validation

    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    const username = req.body.username;
    const password = req.body.password;


    // Find user by username
    User.findOne({ username }).then((user: UserModel) => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ response: "Username not found" });
      }
      // Check password
      bcrypt.compare(password, user.password).then((isMatch: boolean) => {

        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            username: user.username
          };// Sign token
          jwt.sign(
            payload,
            process.env.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (_err: Error, token: string) => {
              res.json({
                username: user.username,
                success: true,
                token: "Bearer " + token,
                response: "Login successful"
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ response: "Password incorrect" });
        }
      });
    });
  };