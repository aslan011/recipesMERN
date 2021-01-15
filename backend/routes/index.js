const express = require('express');
const router = express.Router();

const mealController = require('../controllers/mealController')

router.get('/recipes', mealController.homepage)

router.post('/recipe/addMeal', mealController.add_meal)

router.delete('/recipe/:id/delete', mealController.delete_meal)

router.get('/recipe/:id', mealController.meal_detail)

router.get('/tags/:query', mealController.tags)

router.get('/:query', mealController.index);

router.get('/', function(req, res) {
    res.redirect('/recipes');
  });

module.exports = router;
