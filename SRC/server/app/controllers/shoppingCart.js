const shoppingCart = require('../models/shoppingCart')

async function addShoppingCart(data, res) {

    console.log(data);


    // const addShoppingCart = await new shoppingCart()
    // const sessionData = session.passport.user

    // addShoppingCart.destino = data.destino,
    //     addShoppingCart.descripcion = data.descripcion,
    //     addShoppingCart.precio = data.precio,
    //     addShoppingCart.imgURL = data.imgURL,
    //     addShoppingCart.public_id = data.public_id,

    //     //datos del usuario tomado de la session
    //     addShoppingCart.user = sessionData.username,
    //     addShoppingCart.userID = sessionData._id,
    //     addShoppingCart.userEmail = sessionData.email

    // addShoppingCart.save()


    return res.json({
        status: 200,
        response: 'Viaje agregado al Carrito con Exito'
    })

}


module.exports = { addShoppingCart }