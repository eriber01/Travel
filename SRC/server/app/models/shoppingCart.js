const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Product = require('../models/product')

const User = require('../models/user')

const ShoppingCart = new Schema({
    id: String,
    userID: String,
    productId: String,
    user: { type:  Schema.ObjectId, ref: 'User'},
    products: {type: Schema.ObjectId, ref: 'Product'}
})


module.exports = mongoose.model('shopping_cart', ShoppingCart);