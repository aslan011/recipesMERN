const Meal = require('../models/meal');
const url = require('url');
const { json } = require('express');

exports.meal_detail = function(req, res) {
  Meal.findById(req.params.id)
  .exec(function (err, meal) {
    if (err) return res.status(500).send(err);
    res.send(meal)
  })
};

exports.index = function(req, res) {
  const query = url.parse(req.url,true).query
  const regexQuery = `^${query.name}`;
    Meal.find({name: {$regex: regexQuery, $options: 'mi'}})
      .exec(function (err, meals) {
        if (err) return res.status(500).send(err);
        res.send(meals);
      });
};

exports.tags = function(req, res) {
  const query = url.parse(req.url,true).query;
    Meal.find({cuisine: query.cuisine, difficulty: query.difficulty})
      .exec(function (err, meals) {
        if (err) return res.status(500).send(err);
        res.send(meals);
      });
};

/* exports.homepage = function(req, res, next) {
  Meal.
  aggregate(
    [ { $sample: { size: 3 } } ]
  ).
  exec(function (err, meals) {
    if (err) { return next(err); }
    res.send(meals);
})}; */

exports.homepage = function(req, res) {
  Meal.find().
  exec(function (err, meals) {
    if (err) return res.status(500).send(err);
    res.send(meals);
})};

exports.deleteAll = function(req, res) {
  Meal.deleteMany({})
  .exec(function (err, meal) {
    if (err) return (
      res.status(500)
      .json({ statusMessage: err.message })
      .send()
      );
  
    res.status(200)
    .json({ statusMessage: 'Meal successfully deleted' })
    .send()
  })
}

exports.add_meal = function(req, res) {
  //const newMeal = req.body;
  //const mealObj = new Meal({newMeal}) -- interesting, doing it this way doesnt include all the properties

  const mealObj = new Meal({
    name: req.body.name,
    description: req.body.description,
    cuisine: req.body.cuisine,
    difficulty: req.body.difficulty,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  })

  mealObj.save(err => {
    if (err) return (
    res.status(500)
    .json({ statusMessage: err.message })
    .send()
    );

    res.status(200)
    .json({ statusMessage: 'Meal successfully added' })
    .send()
  });
};

exports.edit_meal = function(req, res) {
  const filter = { _id: req.params.id};
  const update = {
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    cuisine: req.body.cuisine,
    difficulty: req.body.difficulty,
    tag: req.body.tags
  }

  // was trying to do Json.parse here and it wasnt working, had to manaully parse it.
  Meal.findOneAndUpdate(filter, update)
  .exec(function (err, meal) {
    if (err) return (
      console.log(err)
      .res.status(500)
      .json({ statusMessage: err.message })
      .send()
      );
  
    res.status(200)
    .json({ meal: update, statusMessage: 'Meal successfully updated' })
    .send()
  });
};

exports.delete_meal = function(req, res) {
  Meal.findByIdAndRemove(req.params.id)
  .exec(function (err, meal) {
    if (err) return (
      res.status(500)
      .json({ statusMessage: err.message })
      .send()
      );
  
    res.status(200)
    .json({ statusMessage: 'Meal successfully deleted' })
    .send()
  })
}

/* exports.tags = function(req, res, next) {
  const query = url.parse(req.url,true).query;
  const regexQuery = `^${query.name}`;
    Meal.find({tags: {$regex: regexQuery, $options: 'mi'}})
      .exec(function (err, meals) {
        if (err) { return next(err); }
        res.send(meals);
      });
};
 */
