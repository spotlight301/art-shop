const { User } = require("../models/User");
const { Shop } = require("../models/Shop");
const { Product } = require("../models/Product");
const { order } = require("../models/Order");

//get the user profile page and send userInfo object to get the user email and add it the form input
module.exports.profile_create_get= (req, res) => {
  User.findById('6575fb12987ffca44bede54e')
    .then((userInfo) => {
      res.render("user/profile", { userInfo });
    })
    .catch((error) => {
      console.log("something is wrong with the user info , " + error);
      res.send("please try again later");
    });
};

//store user profile info in the database
module.exports.profile_create_post  = (req, res) => {
  let {username} = req.body.username;
  let {phoneNumber} = req.body.phoneNumber;
  let {DOB} = req.body.DOB;
  let {role} = req.body.role;
  let user = new User({username, phoneNumber, DOB, role});
  user
    .save()
    .then(() => {
      //if buyer than go to home page
      if({role} == 1){
      res.redirect("/");
      }else if({role} == 2){
        //if seller than go to add shop page
        res.redirect("/shop/add");
      }
    })
    .catch((error) => {
      console.log("something went wrong when inserting user info , " + error);
      res.send("please try again later!");
    });
};
