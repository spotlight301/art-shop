
const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { Shop } = require("../models/Shop");
const upload = require('../config/multer');


exports.shop_index_get = (req,res) => {
    Shop.find()
    .then((shop) => {
        res.render("shop/index", {shop})
    })
    .catch(err => {
        console.log(err)
    })
}

exports.shop_create_get = (req,res) => {
    res.render("shop/add")
}


exports.shop_create_post = (req,res) => {
    console.log(req.body);
    let shop = new Shop({
      logo:req.file.filename,
      name: req.body.name,
      userId: req.user.id
    })
console.log("shop" , shop)
    // Save Shop
    shop.save()
    .then(() => {
        let shopId = shop.id;
        res.redirect("/product/add?shopId=" + shopId);
    })
    .catch((err) => {
        console.log(err);
        res.send("please try again later")
    })
}