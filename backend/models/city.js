const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    id: Number,
    imgSrc: String,
    destTitle: String,
    country: String,
    description: String,
});

const City = mongoose.model('City', citySchema);

module.exports = City;