// controllers/cartController.js
const {Cart} = require("../models/Cart");
const {Product} = require("../models/Product");
const mongoose = require('mongoose')
module.exports.cart_add_get = (req, res) => {
  res.render("cart/index");
};

module.exports.cart_add_post = async(req, res) => {
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
  try{
  console.log(req.body);
  console.log("user exists:  " + req.user);
  const productId = req.body.id; 



 product = await Product.findById(productId);
 cart = await Cart.findOne({ userId: req.user._id });
console.log(" my cart has products :" , cart);
  
if(!cart){
  cart = new Cart({userId: req.user._id , products:[]});
  cart.products.push({
    id: productId, 
    quantity: req.body.quantity, 
    price: product.price,
  });
  

  await cart.save();
  res.render('cart/index', { cart });

}else{
  cart.products.push({
    id: productId, 
    quantity: req.body.quantity, 
    price: product.price,
  });
  

  await cart.save();
}

  // cart = await Cart.findOne({ userId: req.user._id }).populate('product.id');

  res.render('cart/index', { cart });


}
  
catch (error){
console.log("error in adding the product in cart " , error);
}

};
