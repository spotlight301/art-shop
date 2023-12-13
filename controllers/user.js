const {User} = require("../models/User");
const { Shop } = require("../models/Shop");
const { Product } = require("../models/Product");
const { order } = require("../models/Order");
const upload = require('../config/multer');

//get the user profile page and send userInfo object to get the user email and add it the form input
module.exports.profile_create_get = (req, res) => {
  User.findById(req.user._id)
    .then((userInfo) => {
      res.render("user/profile", { userInfo });
    })
    .catch((error) => {
      console.log("something is wrong with the user info , " + error);
      res.send("please try again later");
    });
};

//store user profile info in the database
module.exports.profile_create_post = (req, res) => {
  console.log("create", req.user);
  console.log(req.body);
  let username = req.body.username;
  let phoneNumber = req.body.phoneNumber;
  // let avatar = req.file.filename
  let DOB = req.body.DOB;
  let role = req.body.role;
  let googleId = res.locals.user.googleId;
let updatedUser = {username, phoneNumber , DOB , role , googleId , isProfileSet:true};
   User.findByIdAndUpdate(req.user._id , updatedUser)
    .then(() => {
      console.log("here", role);
      //if buyer than go to home page
      if (role != 2) {
        console.log("home", role);

        res.redirect("/");
      } else {
        console.log("shopadd", role);

        //if seller than go to add shop page
        res.redirect("/shop/add");
      }
    })
    .catch((error) => {
      console.log("something went wrong when inserting user info , " + error);
      res.send("please try again later!");
    });
};
