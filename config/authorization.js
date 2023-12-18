const passport = require('passport')
module.exports.authorized_user = function (roles){
  return async (req,res,next) => {
    if(roles.includes(req.user.role) ){
      next();
    }else{
      res.redirect("/")
    }
  }
}

// Middleware for routes that require a logged in user
module.exports.isLogged = function(req, res, next) {
  // Pass the req/res to the next middleware/route handler
  if ( req.isAuthenticated() ) return next();
  // Redirect to login if the user is not already logged in
  res.redirect('/auth/google');
}
