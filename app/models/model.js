const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoringSchema = new mongoose.Schema({
    comment: String,
    score: Number,
});

const RestaurantSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    EmailAddress: String,
    name: String,
    type: String,
    website: String,
    street: String,
    number: String,
    city: String,
    zip: String,
    country: String,
    phone: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    payment: String,
    scoring: {
        type: [scoringSchema],
        required: true,
    },
    description: String,
});

module.exports = mongoose.model('Restaurant', RestaurantSchema, 'Restaurants_FL');
