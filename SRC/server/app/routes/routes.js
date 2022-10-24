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

//exportando el modelo de CreateProduct
const CreateProduct = require('../controllers/CMSController')

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
    await CreateProduct.createProduct(req, res)
})


//ruta para borrar un viaje
routes.delete('/manejadorCMS/deleteCMS', async (req, res) => {
    const data = await req.body;
    console.log(data);

    await CreateProduct.deleteTravel(data, res)
})

//ruta para actualizar el viaje
routes.get('/manejadorCMS/update/:id', async (req, res) => {
    const { id } = req.params;

    const dataID = await Product.findById(id)

    res.render('update.html', { dataID })
})

routes.post('/manejadorCMS/update/:id', async (req, res) => {

    //toma el id desde el formulario para buscar el viaje en la DB
    const { id } = req.params
    const data = await Product.findById(id)

    //llama y le pasa los datos al constructor para actualizar

    await CreateProduct.updateTravel(id, req, data)

    //console.log(data);
    res.redirect('/manejadorCMS')
})


module.exports = routes