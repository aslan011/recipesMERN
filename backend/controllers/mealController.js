const Meal = require('../models/meal');
const url = require('url');

exports.index = function(req, res, next) {
  const query = url.parse(req.url,true).query
  const regexQuery = `^${query.name}`;
    Meal.find({name: {$regex: regexQuery, $options: 'mi'}})
      .exec(function (err, meals) {
        if (err) { return next(err); }
        res.send(meals);
      });
};

exports.tags = function(req, res, next) {
  const query = url.parse(req.url,true).query;
    Meal.find({cuisine: query.cuisine, difficulty: query.difficulty})
      .exec(function (err, meals) {
        if (err) { return next(err); }
        res.send(meals);
      });
};

exports.homepage = function(req, res, next) {
  Meal.
  aggregate(
    [ { $sample: { size: 3 } } ]
  ).
  exec(function (err, meals) {
    if (err) { return next(err); }
    res.send(meals);
})};


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
