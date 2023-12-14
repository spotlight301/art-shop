const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { Shop } = require("../models/Shop");
const upload = require("../config/multer");

exports.shop_index_get = (req, res) => {

    Shop.findOne({ userId: req.params.id })
    .then((shop) => {
        console.log( 'shop:', shop._id )
        Product.find({ shop: shop._id })
        .then((products) => {
            console.log('shop shop shop',shop._id)
          console.log("get the products info in shop/index page", products);
          res.render("shop/index", { shop, products });
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("the shop to get logo (for index get) : ", shop);
    
    })
    .catch((error) => console.log("error ", error));

};

exports.shop_create_get = (req, res) => {
  res.render("shop/add");
};

exports.shop_create_post = (req, res) => {
  console.log(req.body);
  console.log(req.user);
  // let shop = new Shop(req.body)
  let shop = new Shop({
    name: req.body.name,
    userId: req.user.id,
    logo: req.file.filename,
  });
  console.log("shop", shop);
  // Save Shop
  shop
    .save()
    .then(() => {
      let shopId = shop.id;
      console.log(shop);
      res.redirect("/product/add?shopid=" + shopId);
    })
    .catch((err) => {
      console.log(err);
      res.send("please try again later");
    });
};
