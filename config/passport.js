
// Require Modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/User');

passport.use(new GoogleStrategy(
  // Configuration object
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
    try{
    // Look to see if the user exists
    let user = await User.findOne({
        googleId: profile.id
    });
    // If there is a user, return it
    if(user){
        return cb(null,user);
    }else{
        // Else, create a new user
        user = await User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            Avatar: profile.photos[0].value
        });
        return cb(null,user);
    }
    }catch(err){
        return cb(err);
    }
  }
));


passport.serializeUser(function(user, cb) {
    cb(null, user._id);
});

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId));
});