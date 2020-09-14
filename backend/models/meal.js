const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MealSchema = new Schema(
  {
    name: {type: String, required: true},
    ingredients: {type: [String], required: true},
    cuisine: {type: String, required: true},
    tags: {type: [String]}
  }
);

// Virtual for meal's URL
MealSchema
.virtual('url')
.get(function () {
  return '/catalog/meal/' + this._id;
});

//Export model
module.exports = mongoose.model('Meal', MealSchema);