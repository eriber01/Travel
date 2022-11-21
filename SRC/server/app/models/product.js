const mongoose = require('mongoose')

module.exports = new mongoose.model('product', {
    id: String,
    destino: String,
    descripcion: String,
    precio: Number,
    imgURL: String,
    public_id: String
})