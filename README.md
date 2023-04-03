# TP2_NoSQL_API
Express.js + MongoDB API 

Etape 1: Créer une base de données dans MongoDB "TP2_BDD"

Etape 2: Importer la collection "Restaurants.json" dans MongoDB et nommer la "Restaurants_FL"

Etape 3: Paramétrer la database dans app/config/database.js

Etape 4: Ouvrez le terminal et installer les dépendances en tapant: "npm install"

Etape 5: Démarrez index.js

Etape 6: Vérifier si le serveur se connecte

Etape 7: Importez dans POSTMAN NoSQL_TP2.postman_collection

Etape 8: Testez les requêtes dans la collection POSTMAN  
ROUTE GET /api/all => Réponse: Tous les restaurants (limité à 5 ordre croissant)  
ROUTE GET /api/by/:code => Réponse: Un restaurant par son code  
ROUTE POST /api/  => Réponse: Création d'un restaurant avec le contenu dans body  
ROUTE PUT /api/by/:code => Réponse: Mise à jour d'un restaurant par son code  
ROUTE DELETE /api/by/:code => Réponse: Suppression d'un restaurant par son code  
