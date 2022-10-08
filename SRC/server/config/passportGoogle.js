const passportGoogle = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

//serialize

passportGoogle.serializeUser((user, done)=>{
    done(null, user)
})

passportGoogle.deserializeUser((user, done)=>{
    done(null, user)
})

passportGoogle.use(new GoogleStrategy({
    clientID:"110947175020-9jq1fino3840d43ufoh4rjjbgcolihcn.apps.googleusercontent.com",
    clientSecret:"hMsktyttjEwN6VsZGfKdSCbl",
    callbackURL:"http://localhost:3001/google/callback"
    },

    function(accessToken, refreshToken, profile, done){
        return done(null, profile);
    }
))