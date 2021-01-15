const Meal = require('../models/meal');
const url = require('url');

exports.meal_detail = function(req, res) {
  Meal.findById(req.params.id)
  .exec(function (err, meal) {
    if (err) return res.status(500).send(err);
    res.send(meal)
  })
}

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

exports.add_meal = function(req, res) {
  //const newMeal = req.body;
  //const mealObj = new Meal({newMeal}) -- interesting, doing it this way doesnt include all the properties

  const mealObj = new Meal({
    name: req.body.name,
    cuisine: req.body.cuisine,
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
