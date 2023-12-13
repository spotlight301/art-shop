const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { Order } = require("../models/Order");
const { Cart } = require("../models/Cart");

exports.order_index_get = (req,res) => {
    Order.find()
    .then((orders) => {
        res.render("order/index", {orders})
    })
    .catch(err => {
        console.log(err)
    })
}

exports.order_add_post = (req,res) => {
    Cart.findOne({userId: req.user._id})
    .then(cart=>{
        let order = new Order({
            userId: req.user._id,
            products: cart.products,
            status: pending
        })
    })
}

exports.oreder_detail_get = (req,res) => {
    
    res.render("order/detail")
}