const express = require("express");
const passport = require("passport");

const router = express.Router();
const indexController = require("../controllers/index");
const User = require("../models/User");

// Routes
router.get("/", indexController.index_get);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/oauth2callback",
  // console.log("GOOGLE CALLBACK");
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// router.get("/oauth2callback", function (req, res) {
//   // console.log("GOOGLE CALLBACK");
//   passport.authenticate("google", function (err, profile, info) {
//     // console.log("PROFILE: ", profile);
//     //find if the user exists in the database or not
//     // console.log("res.locals.user", profile._id);
//     console.log("oauth2callback", profile);
//     console.log(profile.googleId);
//     User.fineOne({ googleId: profile.googleId })
//       //if they exist db (then the user is logging in)
//       .then((userExists) => {
//         if (userExists.isProfileSet) {
//           // console.log("User found", userExists);
//           //return to home page
//           res.redirect("/");
//         } else {
//           //if the user dont exist in db then the user is signing in, lead to profile to continue their info for the first time
//           res.redirect("/user/profile");
//         }
//       })
//       .catch((error) => {
//         console.log("error in redirect: " + error);
//         return "/";
//       });
//   })(req, res); // you to call the function retuned by passport.authenticate, with is a midleware.
// });

// router.get(
//   "/oauth2callback",
//   passport.authenticate("google", {
//     failureRedirect: "/",
//     successRedirect: function (req, res) {
//       // //find if the user exists in the database or not
//       // User.findById(res.locals.user)
//       //   //if they exist db (then the user is logging in)
//       //   .then((userExists) => {
//       //     if (userExists) {
//       //       //return to home page
//       //       return "/";
//       //     } else {
//       //       //if the user dont exist in db then the user is signing in, lead to profile to continue their info
//       //       return "/user/profile";
//       //     }
//       //   })
//       //   .catch((error) => {
//       //     console.log("error in redirect: " + error);
//       //     return "/";
//       //   });
//       return "/";
//     }, // end of successRedirect function
//   })
// );

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

module.exports = router;
