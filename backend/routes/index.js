const express = require('express');
const router = express.Router();

const mealController = require('../controllers/mealController')

/* GET home page. */
router.get('/tags/:query', mealController.tags)

router.get('/:query', mealController.index);

router.get('/', mealController.homepage)

module.exports = router;
