
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