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
        successRedirect: '/',
        failureRedirect: '/'
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