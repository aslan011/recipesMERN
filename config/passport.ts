const mongoose = require("mongoose");
const User = mongoose.model("user");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
require('dotenv').config();
import { JwtPayload } from "jsonwebtoken";
import { Mongoose } from "mongoose";
import { UserModel } from '../interfaces/mongoDb'

const opts = {
  "jwtFromRequest": "",
  "secretOrKey":""
};

export {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretOrKey!;

module.exports = (passport: { use: (arg0: any) => void; }) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload: JwtPayload, done: (arg0: null, arg1: boolean | UserModel) => void ) => {
      User.findById(jwt_payload.id)
        .then((user: UserModel) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err: any) => console.log(err));
    })
  );
};