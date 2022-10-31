const express = require('express')
const routes = express.Router()

const passport = require('passport')

//exportando los modelos
//usuario
const User = require('../models/user')
//producto o travel
const Product = require('../models/product')

//shoppingCart
const ShoppingCart = require('../models/shoppingCart')

//exportando el envio del email
const email = require('../controllers/sendEmail')

//exportando el modelo de CMSManagement
const CMSManagement = require('../controllers/CMSController')

//exportando el controlador de ShoppingCart
const addShoppingCart = require('../controllers/addCart')

//detalles del viaje
routes.get('/travelDetails/:id', async (req, res) => {
    const { id } = await req.params
    const DataTravel = await Product.findById(id)
    console.log(DataTravel);
    res.render('travelDetails.html', { DataTravel })

})

//area de la compra
routes.get('/shoppingCart/:id', /* isAuthenticated, */ async (req, res) => {

    const cartID = req.session.passport.user._id
    const dataShopping = await ShoppingCart.find({ userID: cartID })

    console.log(dataShopping);
    console.log(cartID);
    res.render('shoppingCart.html', { dataShopping })
})

//agregar al carrito mediante el btn reservar

routes.get('/addShoppingCart/:id', async (req, res) => {
    const { id } = await req.params;

    const dataProduct = await Product.findById(id)


    const session = await req.session

    if (req.user != undefined) {
        console.log('vieje creado');
        await addShoppingCart(dataProduct, session)
    } else {
        console.log('no se pudo crear');
    }
    res.redirect('/shoppingCart/:id')
})

// envio de email

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

//manejador de contenido (CMS)
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

//ruta para crear producto
routes.post('/manejadorCMS/createProduct', async (req, res) => {
    //envia los datos al controlador para guardarlos en mongo
    await CMSManagement.createProduct(req, res)
})


//ruta para borrar un viaje
routes.delete('/manejadorCMS/deleteCMS', async (req, res) => {
    const data = await req.body;
    await CMSManagement.deleteTravel(data, res)
})

routes.put('/manejadorCMS/update', async (req, res) => {
    const data = await req.body

    await CMSManagement.updateTravel(res, data, req)
})


module.exports = routes