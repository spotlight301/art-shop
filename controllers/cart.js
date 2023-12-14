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
      console.log("cart details GET", cart.products);
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
    }

    // Check if the product already exists in the cart
    const existingProduct = cart.products.find(
      (p) => p.id.toString() === productId
    );

    if (existingProduct) {
      // Update quantity if the product is already in the cart
      existingProduct.quantity += parseInt(req.body.quantity, 10);
    } else {
      // Add the product to the cart if it doesn't exist
      const cartProduct = {
        id: productId,
        quantity: parseInt(req.body.quantity, 10),
        price: product.price
      };

      cart.products.push(cartProduct);
    }

    await cart.save();
    res.redirect("/cart/add");
  } catch (error) {
    console.log("error in adding the product in cart ", error);
  }
};

module.exports.cart_delete_get = (req, res) => {
  Cart.findOne({userId:req.user.id})
  .then((cart)=>{
    let idx = cart.products.findIndex(product=> product._id === req.query.id)
    cart.products.splice(idx, 1)
    cart.save()
    .then(()=> res.redirect('/cart/add'))
    .catch()
  })
  .catch()
};
