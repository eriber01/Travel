const express = require('express')
const routes = express.Router()
const passport = require('passport')

//users
const User = require('../controllers/users')
//product o travel
const Product = require('../models/product')

//shoppingCart
const ShoppingCart = require('../models/shoppingCart')

//email
const email = require('../controllers/sendEmail')

//CMSManagement
const CMSManagement = require('../controllers/CMSController')

//ShoppingCart
const shoppingCart = require('../controllers/shoppingCart')
const onMessage = require('../utils')

//manage user
routes.put('/manageUser', async (req, res) => {

    try {
        const data = await req.body

        data.authId ? await User.createUpdateUser(data, res) : onMessage(res, 'No hay id de Usuario', 400, null)

    } catch (error) {
        onMessage(res, 'Error al Guardar el Usuario', 400, error)
    }

})


routes.get('/prueba', async (req, res) => {

    const data = await ShoppingCart.find({ user: '637ae8a164a7b5be7c95b7f8', status: '637a84b0bfb7b97506437b35' })
        .populate('user')
        .populate('products')
        .populate('status')

    res.json({
        res: data
    })

})

//add to cart
routes.post("/addShoppingCart", async (req, res) => {
    try {
        const data = await req.body
        await shoppingCart.addShoppingCart(data, res)
    } catch (error) {
        onMessage(res, 'Error al Reservar el Viaje', 400, error, null)
    }
})

routes.delete("/deleteShoppingCart", async (req, res) => {
    try {

        const data = await req.body

        await shoppingCart.deleteShoppingCart(data, res)

    } catch (error) {
        onMessage(res, 'Error al Borrar el Viaje', 400, error, null)
    }
})

//get cart
routes.get("/getShoppingCart/:user", async (req, res) => {
    try {
        const { user } = await req.params
        await shoppingCart.getShoppingCart(user, res)
    } catch (error) {
        onMessage(res, 'Error al traer el Carrito', 400, error, null)
    }
})

// send de email
routes.post('/sendEmail', async (req, res) => {

    const data = req.body

    try {
        await email.SendMail(data, res)
    } catch (error) {
        res.json({
            res: 'error'
        })
    }

})

//CMS Manager
routes.get('/getProducts', async (req, res) => {

    try {
        const data = await Product.find()

        if (data.length) {
            onMessage(res, 'Success', 200, null, data)
        }

    } catch (error) {
        onMessage(res, 'Hubo un error', 400, error, [])
    }
})

//traer un unico Travel
routes.get('/getUniqueProducts/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params);
    const data = await Product.findById(id)
    try {
        onMessage(res, 'Datos traidos con Exito', 200, null, data)
    } catch (error) {
        onMessage(res, 'Hubo un Error al Buscar el Viaje', 400, error, [])
    }

})

//create travel
routes.post('/manejadorCMS/createProduct', async (req, res) => {
    await CMSManagement.createProduct(req, res)
})


//delete travel
routes.delete('/manejadorCMS/deleteCMS', async (req, res) => {
    const data = await req.body;
    await CMSManagement.deleteTravel(data, res)
})

//update travel
routes.put('/manejadorCMS/update', async (req, res) => {
    const data = await req.body

    await CMSManagement.updateTravel(res, data, req)
})

module.exports = routes