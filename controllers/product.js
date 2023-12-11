const { Shop } = require("../models/Shop");
const { User } = require("../models/User");
const { Order } = require("../models/Order");
const { Product } = require("../models/Product");


module.exports.product_create_get= (req,res) =>{
  res.render('product/add');
}