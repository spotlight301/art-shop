const { Shop } = require("../models/Shop");
const { User } = require("../models/User");
const { Order } = require("../models/Order");
const  {Product} = require("../models/Product");
const upload = require('../config/multer');

module.exports.product_create_get= (req,res) =>{
 
  res.render('product/add',{shopid: req.query.shopid});
}

// module.exports.product_create_post =  (req, res) => {
//   // console.log(req.query.shopid);
//   let product = new Product({
//     image: req.file.filename,
//     productName: req.body.productName,
//     price: req.body.price,
//     description: req.body.description,
//     productType: req.body.productType,
//     shop: req.body.shopid
//   })
//   console.log("the image :",product.image)
//   console.log(" product",product);
//   console.log(" product name",product.productName);
//   console.log("shop id " , product.shop);
//   product.save()
//   .then(()=>{
//     res.redirect('/shop/index/' + req.body.shopid);
//   })
//   .catch(error => {
//     res.send('something went wrong');
//     console.log('error on add product , ' + error)
//   })
// }

module.exports.product_create_post = (req, res) => {
  let product = new Product({
    image: req.file.filename,
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description,
    productType: req.body.productType,
    shop: req.body.shopid
  });

  product.save()
    .then(() => {
      Shop.findById(req.body.shopid)
      .then(shop=>{
        console.log('req.boooody', req.body.shopid)
        res.redirect(`/shop/index/${shop.userId}`);
      })
      .catch(err=>{
        console.log(err);
      })
     
    })
    .catch(error => {
      res.send('Something went wrong');
      console.log('Error on add product:', error);
    });
};

 


module.exports.product_show_get = (req,res) => {
  console.log(req.query.id);
  // Product.findById(req.query.id)
  Product.findById(req.query.id)
  .then((product) => {
    res.render('product/detail' , {product})
  })
  .catch((error)=>{
    console.log(error);
  })
}

exports.product_edit_get = (req, res) => {
  console.log("id for product:",req.query.id)
  Product.findById(req.query.id)
  .then((product) => {
    Shop.findById(product.shop)
    .then(shop=>{
      console.log("the product info :" , product)
      console.log("the shop info :" , shop)
      res.render("product/edit", {product,shop})
    })
    .catch(err=>{
      console.log(err);
    })
    
  })
  .catch(err => {
    console.log(err);
  })
}

exports.product_update_put = (req, res) => {
  console.log("the body: " , req.body)
  console.log("the body: " , req.file)
  console.log("the product id: " , req.body.id)
  let img= "";
  if(req.file){
    img = req.file.filename
  }
  else{
    img = req.body.image
  }
  let updatedProduct = {
    image: img,
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description,
    productType: req.body.productType,
  }
  Product.findByIdAndUpdate(req.body.id, updatedProduct)

  .then(() => {
    console.log("id +=-"+req.body.shopid);
    res.redirect('/shop/index/'+ req.body.shopid);
  })
  .catch((err) => {
    res.send('Something went wrong!')
    console.log(err);
  })
}

exports.product_list_get = (req,res) => {
  Product.find()
  .then((products) => {
  res.render("product/list", {products});
})
.catch((err) => {
  console.log(err)
})
}


exports.product_delete_get = (req, res) => {
  console.log(req.query.id);
  console.log(req.query)
  Product.findByIdAndDelete(req.query.id)
  .then(() => {
    console.log("shopid:", req.query.shopid)
    res.redirect('/shop/index/' + req.query.shopid);
  })
  .catch((err) => {
    console.log(err);
  })
}