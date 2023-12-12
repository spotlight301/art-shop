// controllers/cartController.js
const Cart = require('../models/User');
const {Product} = require('../models/Product')

module.exports.cart_add_get = (req,res) => {
    res.render('cart/index');
}

module.exports.cart_add_post = (req,res) => {
    console.log(req.body) 
    Product.findById(req.body.id)
    .then((product)=>{
        
    })
    .catch(error => {
        console.log("error in adding product to cart " , error)
    })

}
