const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const config = require('../../config')
const User = require("../../models/user")

module.exports = (passport) => {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    })

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    })

    // Use the GoogleStrategy within Passport.
    //   Strategies in Passport require a `verify` function, which accept
    //   credentials (in this case, an accessToken, refreshToken, and Google
    //   profile), and invoke a callback with a user object.
    passport.use(new GoogleStrategy({
        clientID: config.googleOAuth.clientId,
        clientSecret: config.googleOAuth.clientSecret,
        callbackURL: config.googleOAuth.callbackUrl,
    }, async function(accessToken, refreshToken, profile, done) {
            let user = await User.findOneAndUpdate({
                "google.email": profile.emails[0].value
            }, {
                "google.email": profile.emails[0].value,
                "google.name": profile.displayName,
                "google.token": profile.id,
                "google.id": profile.id
            }, { 
                upsert: true, 
                new: true 
            })
            return done(null, user)
        }
    ))    
}
