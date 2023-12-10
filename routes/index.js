const express = require('express');

const router = express.Router();

const passport = require('passport');

const indexController = require('../controllers/index');

// Routes
router.get('/', indexController.index_get);

router.get("/auth/google", passport.authenticate(
    'google',
    {
        scope: ['profile', 'email'],
    }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        failureRedirect: '/',
        successRedirect: function(req,res){
          //find if the user exists in the database or not
          User.findId(res.locals.user)
          //if they exist db (then the user is logging in)
          .then((userExists)=>{
              if(userExists){
                //return to home page
                return "/";
              }else{
                //if the user dont exist in db then the user is signing in, lead to profile to continue their info
                return "/user/profile"
              }
          })
          .catch(error=>{
            console.log('error in redirect: ' + error)
          })
        } // end of successRedirect function

    }
));

// Sara checkout !!!!
// OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/');
    });
});  






module.exports = router;