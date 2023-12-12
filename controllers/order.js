const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { Order } = require("../models/Order");

exports.order_index_get = (req,res) => {
    Order.find()
    .then((orders) => {
        res.render("order/index", {orders})
    })
    .catch(err => {
        console.log(err)
    })
}

exports.oreder_detail_get = (req,res) => {
    res.render("order.detail")
}