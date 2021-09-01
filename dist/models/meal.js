"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = require('mongoose');
const Schema = exports.mongoose.Schema;
const MealSchema = new Schema({
    name: { type: String, required: true },
    ingredients: { type: [Object], required: true },
    cuisine: { type: String, required: true },
    difficulty: { type: String },
    description: { type: String },
    instructions: { type: [Object], required: true },
    tags: { type: [String] }
});
// Virtual for meal's URL
MealSchema
    .virtual('url')
    .get(function () {
    return '/recipe' + this._id;
});
//Export model
module.exports = exports.mongoose.model('Meal', MealSchema);
//# sourceMappingURL=meal.js.map