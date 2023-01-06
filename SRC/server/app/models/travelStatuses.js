const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TravelStatuses = new Schema({
    id: Number,
    name: String,
})

module.exports = mongoose.model('travel_statuses', TravelStatuses)