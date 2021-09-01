"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = require('express');
const router = exports.express.Router();
const mealController = require('../controllers/mealController');
const userController = require('../controllers/userController');
router.post('/delete', mealController.deleteAll);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/recipes', mealController.homepage);
router.post('/addMeal', mealController.add_meal);
router.delete('/recipe/:id/delete', mealController.delete_meal);
router.post('/recipe/:id', mealController.edit_meal);
router.get('/recipe/:id', mealController.meal_detail);
router.get('/tags/:query', mealController.tags);
router.get('/search', mealController.index);
router.get('/', mealController.homepage);
module.exports = router;
//# sourceMappingURL=index.js.map