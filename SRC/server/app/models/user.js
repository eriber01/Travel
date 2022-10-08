const mongoose = require('mongoose')


module.exports = new mongoose.model('USer', {
    id: String,
    username: String,
    lastname: String,
    email: String,
    password: String,
    rol: String
})


