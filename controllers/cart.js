// controllers/cartController.js
const { Cart } = require("../models/Cart");
const { Product } = require("../models/Product");
const mongoose = require("mongoose");
module.exports.cart_add_get = (req, res) => {
  //   console.log("cart._id", cart._id)
  Cart.findOne({ userId: req.user._id })
    .populate({
      path: "products",
      populate: {
        path: "id",
        model: "Product",
      },
    })
    .then((cart) => {
      // console.log("cart details GET", cart.products)
      res.render("cart/index", { cart });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.cart_add_post = async (req, res) => {
  //   console.log(req.body);
  //     const productId = req.body.id;
  //   Product.findById(req.body.id)
  //     .then((product) => {
  //       Cart.findOne({ userId: req.user._id }).populate('products')
  //     //   console.log("userId:", req.user._id )
  //         .then((cart) => {
  //           // If else condition
  //          if(!cart){
  //   cart = new Cart({userId: req.user._id , products:[]});
  //   cart.products.push({
  //     id: productId,
  //     quantity: req.body.quantity,
  //     price: product.price,
  //   });

  //   cart.save();
  //      }
  // else{
  //   cart.products.push({
  //     id: productId,
  //     quantity: req.body.quantity,
  //     price: product.price,
  //   });

  // }

  //      res.render('cart/index', { cart });

  //      })
  //         .catch((error) => {
  //           console.log("error in adding product to cart ", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log("error in adding product to cart ", error);
  //     });
  try {
    console.log(req.body);
    console.log("user exists:  " + req.user);
    const productId = req.body.id;

    const product = await Product.findById(productId);
    let cart = await Cart.findOne({ userId: req.user._id });
    console.log(" my cart has products :", cart);

    if (!cart) {
      cart = new Cart({ userId: req.user._id, products: [] });
      cart.products.push({
        id: productId,
        quantity: req.body.quantity,
        price: product.price,
      });

      await cart.save();
      // res.render('cart/index', { cart });
    } else {
      cart.products.push({
        id: productId,
        quantity: req.body.quantity,
        price: product.price,
      });

      await cart.save();
    }

    res.render("cart/index", { cart });
  } catch (error) {
    console.log("error in adding the product in cart ", error);
  }
};

module.exports.cart_delete_get = (req, res) => {};
