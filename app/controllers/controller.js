const Restaurant = require('../models/model');

// Obtenir tous les restaurants
exports.getAllRestaurants = (req, res, next) => {
    // afficher tous les restaurants mais limiter l'affichage à 5, ordonné par code croissant
    Restaurant.find().limit(5).sort({ code: 1 })
        .then(restaurants => {
            res.status(200).json(restaurants);
        })
        .catch(error => {
            res.status(400).json({ error });
        }
    );
};

// Ajouter un nouveau restaurant
exports.createRestaurant =  async (req, res, next) => {
    try {
        // Compte le nombre de restaurants dans la collection et ajoute 1 au nombre de restaurants
        var count = await Restaurant.countDocuments({});
        count = count + 1;

        // crée une une date actuelle
        var dateNow = new Date();

        const restaurant = new Restaurant({
            code: count,
            phone: req.body.phone,
            scoring: req.body.scoring,
            date: dateNow,
        });
        restaurant.save()
            .then(() => {
                res.status(201).json({ message: 'Restaurant créé !' });
            })
            .catch(error => {
                res.status(400).json({ error });
            });
    } catch (err) {
        // renvoi d'une erreur en cas de problème lors de la création du restaurant
        console.error(err);
        res.status(500).json({ error: err });
    }
};

// Obtenir un restaurant par son ID
exports.getRestaurantByCode = (req, res, next) => {
    Restaurant.findOne({ code: req.params.code })
        .then(restaurant => {
            res.status(200).json(restaurant);
        })
        .catch(error => {
            res.status(404).json({ error });
        });
};

// Modifier un restaurant
exports.updateRestaurant = (req, res, next) => {
    // récupère le body
    const restaurant = req.body;

    // met à jour le restaurant ayant le code correspondant au paramètre code
    Restaurant.updateOne({ code: req.params.code }, { ...restaurant, code: req.params.code })
        .then(() => {
            res.status(200).json({ message: 'Restaurant modifié !' });
        }
    )
    .catch(error => {
        res.status(400).json({ error });
    });

};

// Supprimer un restaurant
exports.deleteRestaurant = (req, res, next) => {
    Restaurant.deleteOne({ code: req.params.code })
        .then(() => {
            res.status(200).json({ message: 'Restaurant supprimé !' });
        })
        .catch(error => {
            res.status(400).json({ error });
        });
};
