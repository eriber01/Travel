const LocalStrategy = require('passport-local').Strategy
const User = require('../app/models/user')

const bCrypt = require('bcrypt-nodejs')

module.exports = (passport)=>{
    //login
    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',

        passReqToCallback: true
    },
        //toma los datos de usuario
        function(req, username, password, done){
            User.findOne({'username':username},
                function(err, user){
                    if(err) return done(err)
                    if(!user){
                        return done(null, false, req.flash('message', 'El usuario no existe'))
                    }
                    if(!isValidPassword(user, password)){
                        return done(null, false, req.flash('message', 'La contrasena no es correcta'))
                    }

                    return done(null, user)
                }
            )
        }
    ))

    const isValidPassword = (user, password)=>{
        return bCrypt.compareSync(password, user.password)
    }
}