const LocalStrategy = require('passport-local').Strategy
const bCrypt = require('bcrypt-nodejs')
const User = require('../app/models/user')

module.exports = function(passport){
    passport.use('signup', new LocalStrategy({
        passReqToCallback: true
    },
        //toma los datos para el registro
        function(req, username, password, done){
            findOrCreateUser = function(){
                User.findOne({'username': username}, function(err, user){
                    if(err) return done(err)
                    if(user){
                        console.log('el usuario existe');
                        return done(null, false, req.flash('messageSignup', 'El usuario ya existe'))
                    }else{
                        let newUser =  new User()
                        const userData = req.body

                        newUser.username = username;
                        newUser.password = createHash(password)
                        newUser.lastname = userData.lastname
                        newUser.email = userData.email
                        
                        newUser.save(function(err){
                            if(err) throw err;
                            return done(null, newUser)
                        })
                    }
                })
            }
            process.nextTick(findOrCreateUser)
        }
    ));

    let createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
    }
}