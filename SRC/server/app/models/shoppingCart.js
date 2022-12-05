const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShoppingCart = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    products: { type: Schema.Types.ObjectId, ref: 'product' },
    status: { type: Schema.Types.ObjectId, ref: 'travel_statuses' },
    date: Date
})


module.exports = mongoose.model('shopping_cart', ShoppingCart);