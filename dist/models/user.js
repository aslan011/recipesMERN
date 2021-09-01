"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = require("mongoose");
const Schema = exports.mongoose.Schema;
const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
module.exports = exports.mongoose.model('user', UserSchema);
//# sourceMappingURL=user.js.map