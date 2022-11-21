const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: String,
    authId: String,
    rol: String,
})

module.exports = mongoose.model('users', User);