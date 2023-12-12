const { Shop } = require("../models/Shop");
const { User } = require("../models/User");
const { Order } = require("../models/Order");
const  {Product} = require("../models/Product");
const upload = require('../config/multer');

module.exports.product_create_get= (req,res) =>{
  res.render('product/add',{shopid: req.query.shopid});
}

module.exports.product_create_post =  (req, res) => {
  console.log(req.query.shopid);
  let product = new Product({
    image: req.file.filename,
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description,
    productType: req.body.productType,
    shop: req.body.shopid
  })
  console.log(" product",product);
  console.log("image" , product.image);
  console.log(" product name",product.productName);
  console.log("shop id " , product.shop);
  product.save()
  .then(()=>{
    res.redirect('/shop/index/' + req.body.shopid);
  })
  .catch(error => {
    res.send('something went wrong');
    console.log('error on add product , ' + error)
  })
}

 


module.exports.product_show_get = (req,res) => {
  console.log(req.query.id);
  // Product.findById(req.query.id)
  Product.findById('6577468f52e45f332b893e81')
  .then((product) => {
    res.render('product/detail' , {product})
  })
  .catch((error)=>{
    console.log(error);
  })
}

module.exports.product_show_post = (req,res) => {
  
}