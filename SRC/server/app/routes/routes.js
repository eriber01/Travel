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

//details del viaje
routes.get('/travelDetails/:id', async (req, res) => {
    const { id } = await req.params
    const DataTravel = await Product.findById(id)
    console.log(DataTravel);
    res.render('travelDetails.html', { DataTravel })

})

routes.get('/prueba', async (req, res) => {

    ShoppingCart.find({}, (err, cart) => {
        User.populate(cart, { path: 'user' }, (err, cart) => {

            res.json({
                res: cart
            })
        })
    })

})

//area shopping
routes.get('/shoppingCart/:id', /* isAuthenticated, */ async (req, res) => {

    const cartID = req.session.passport.user._id
    const dataShopping = await ShoppingCart.find({ userID: cartID })

    res.render('shoppingCart.html', { dataShopping })
})

// //add to cart
// routes.get('/addShoppingCart/:id', async (req, res) => {
//     const { id } = await req.params;

//     const dataProduct = await Product.findById(id)

//     const session = await req.session

//     if (req.user != undefined) {
//         console.log('vieje creado');
//         await shoppingCart(dataProduct, session)
//     } else {
//         console.log('no se pudo crear');
//     }
//     res.redirect('/shoppingCart/:id')
// })

routes.post("/addShoppingCart", async (req, res) => {
    try {
        const data = await req.bod
        await shoppingCart.addShoppingCart(data, res)
    } catch (error) {
        res.json({
            status: 400,
            response: 'Hubo un Error al Agregar al Carrito'
        })
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
            return res.json({
                status: 'success',
                data
            })
        }

    } catch (error) {
        return res.json({
            status: 'Error',
            response: 'Hubo un error'
        })
    }
})

routes.get('/getUniqueProducts/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params);
    const data = await Product.findById(id)
    try {
        res.json({
            status: 200,
            response: data
        })
    } catch (error) {
        res.json({
            status: 200,
            response: "Hubo un Error al Buscar el Viaje"
        })
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

//get Statuses

module.exports = routes