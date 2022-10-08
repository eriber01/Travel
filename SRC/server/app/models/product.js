const mongoose = require('mongoose')

module.exports = new mongoose.model('Product', {
    id: String,
    destino: String,
    descripcion: String,
    detalles: String,
    precio: Number,
    imgURL: String,
    public_id: String
})