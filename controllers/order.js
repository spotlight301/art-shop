const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { Order } = require("../models/Order");
const { Cart } = require("../models/Cart");

exports.order_index_get = (req, res) => {
  Order.find()
    .then((orders) => {
      res.render("order/index", { orders });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.order_add_post = (req, res) => {
  Cart.findOne({ userId: req.user._id })
    .populate({
      path: "products",
      populate: {
        path: "id",
        model: "Product",
      },
    })
    .then((cart) => {
      console.log(cart);
      let order = new Order({
        userId: req.user._id,
        product: cart.products,
        status: "pending",
      });
      order.save().then(() => {
        cart.products = [];
        cart.save().then(() => {
          res.redirect("/order/index");
        });
      });
    })
    .catch((error) => {
      console.log("the error in adding order", error);
    });
};

exports.order_show_get = (req, res) => {
  console.log(req.query.id);
  Order.findById(req.query.id)
    .populate({
      path: "product",
      populate: {
        path: "id",
        model: "Product",
      },
    })
    .then((orders) => {
      res.render("order/detail", { orders });
    })
    .catch((error) => {
      console.log("order error: ", error);
    });
};
