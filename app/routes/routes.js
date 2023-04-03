const express = require( 'express');
const router = express.Router();

// Require controller modules.
const restaurantController = require("../controllers/controller");

// ROUTE GET /api/all => Réponse: Tous les restaurants (limité à 5 ordre croissant)
router.get('/all', restaurantController.getAllRestaurants);
// ROUTE GET /api/by/:code => Réponse: Un restaurant par son code
router.get('/by/:code', restaurantController.getRestaurantByCode);
// ROUTE POST /api/  => Réponse: Création d'un restaurant avec le contenu dans body
router.post('/', restaurantController.createRestaurant);
// ROUTE PUT /api/by/:code => Réponse: Mise à jour d'un restaurant par son code
router.put('/by/:code', restaurantController.updateRestaurant);
// ROUTE DELETE /api/by/:code => Réponse: Suppression d'un restaurant par son code
router.delete('/by/:code', restaurantController.deleteRestaurant);

module.exports = router;