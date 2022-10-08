const mongoose = require('mongoose')

module.exports = new mongoose.model("ShoppingCart", {
    id: String,
    destino: String,
    descripcion: String,
    detalles: String,
    precio: Number,
    imgURL: String,
    public_id: String,
    //diferencia del modelo de product aqui se le agregar el usuario y su id
    user: String,
    userID: String,
    userEmail: String
})