const mongoose = require('mongoose');
const Restaurant = require('../models/model');
mongoose.connect('mongodb://127.0.0.1:27017/TP2_BDD', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function() {
    console.log('Connection to database successful!');
    console.log('Using collection:', Restaurant.collection.name);
});

module.exports = db;
