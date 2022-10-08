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

//valida si el usuario esta autentificado
// const isAuthenticated = (req, res, next) => {
//     if (req.user) {
//         next()
//         return true
//     } else {
//         res.send(
//             '<h3>Lo siento no estas Autorizado para entrar aqui</h3> <a href="/login">Login</a>'
//         )

//         return false
//     }
// }


// module.exports = (routes, passport) => {

//home
routes.get('/', async (req, res) => {
    const DataTravel = await Product.find()
    res.render('index.html', { DataTravel })
})

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

//login
routes.get('/login', async (req, res) => {
    res.render('login.html', { message: req.flash('message') })
})

routes.post('/login', passport.authenticate('local-login', {
    successRedirect: '/shoppingCart/:id',
    failureRedirect: 'login',
    failureFlash: true
}))

//registro
routes.get('/signup', async (req, res) => {
    res.render('signup.html', { message: req.flash('messageSignup') })
})

routes.post('/signup', passport.authenticate('signup', {
    successRedirect: '/shoppingCart/:id',
    failureRedirect: 'signup',
    failureFlash: true
}))

//signup and login with GOOGLE


routes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

routes.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {

        let userdata = req.user.emails[0].value
        if (userdata === 'eriber01@gmail.com') {
            res.redirect('/manejadorCMS')
        } else {
            res.redirect('/shoppingCart')
        }
    }

)

// envio de email

routes.post('/sendEmail', async (req, res) => {

    const data = req.body

    console.log(data);

    try {
        await email.SendMail(data)
        res.json({
            res: 'Mensaje enviado'
        })
    } catch (error) {
        res.json({
            res: error
        })
    }

})


//logout
routes.get('/logout', (req, res) => {
    req.session = null;
    req.logout;
    res.redirect('/')
})


//manejador de contenido (CMS)

routes.get('/manejadorCMS', /* isAuthenticated, */ async (req, res) => {
    const data = await Product.find()

    res.render('cms.html', { data })
})

//ruta para crear producto
routes.post('/manejadorCMS/createProduct', async (req, res) => {
    //envia los datos al controlador para guardarlos en mongo
    await CreateProduct.createProduct(req)

    res.redirect('/manejadorCMS')
})

//ruta para borrar un viaje
routes.get('/manejadorCMS/deleteCMS/:id', async (req, res) => {
    const { id } = await req.params;
    const { public_id } = await Product.findById(id)

    await CreateProduct.deleteTravel(id, public_id)

    res.redirect("/manejadorCMS")
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


routes.get('/prueba', async (req, res) => {


    res.json({
        prueba: 'hola mundo'
    })

})

// }

module.exports = routes