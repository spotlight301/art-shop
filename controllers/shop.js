
const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { Shop } = require("../models/Shop");


exports.shop_index_get = (req,res) => {
    Shop.find()
    .then((shop) => {
        res.render("shop/index")
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
    let shop = new Shop(req.body)

    // Save Shop
    shop.save()
    .then(() => {
        res.redirect("/product/add");
    })
    .catch((err) => {
        console.log(err);
        res.render("please try again later")
    })
}