//importacion de las dependecias
const { static } = require('express')
const express = require('express')
//convertir la informacion que me llega del navegador al servidor
const bodyParser = require('body-parser')
const app = express()
//ayuda con las direciones de las carpetas
const path = require('path')
//acceso a la base de datos de mongodb
const mongoose = require('mongoose')
//configura la autentificacion
const passport = require('passport')
const flash = require('connect-flash')
//toma los metodos http que llegan al servidor y los muestra por consola
const morgan = require('morgan')
//administra las cookies y la session
const session = require('cookie-session') 
//procesa la carga de las imagenes
const multer = require('multer')

//permite usar las variables de entorno
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//exportacion de la url de la DB
const connectDB = require('./config/database')

connectDB()

//flash
app.use(flash())

//settings
const port = process.env.PORT || 3001

//view config
app.set('views', path.join(__dirname + '/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

//middleware
app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public'),
    filename:(req, file, callback)=>{
        callback(null, new Date().getTime() + path.extname(file.originalname));
    }
})

app.use(multer({storage}).single('img'))

//static files
app.use(express.static(path.join(__dirname + '/public')))

//config de la cookie

app.use(session({
    name: 'cookie-travel',
    keys: ['dos mas dos', 'no es cuatro']
}))

//config passport
app.use(passport.initialize())
app.use(passport.session())

const initPassport = require('./config/passport')
const routes = require('./app/routes/routes')


//passport para google
const passportGoogle = require('./config/passportGoogle')

initPassport(passport, passportGoogle)

//routes
// require('./app/routes/routes')(app, passport)

app.use('/api', require('./app/routes/routes'))

app.listen(port, ()=>{
    console.log('Hola desde el puerto: ' + port);
    console.log('MODE: ',  process.env.NODE_ENV);
})
