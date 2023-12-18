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
  let actionURL = "/shop/add"
  res.render("shop/add" , {actionURL});
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
      res.redirect("/product/add?shopid=" + shopId+'&userid=' + shop.userId);
    })
    .catch((err) => {
      console.log(err);
      res.send("please try again later");
    });
};

module.exports.shop_list_get = (req,res) => {
  Shop.find()
  .then((shops)=>{
    res.render("shop/list" , {shops})
  })
  .catch(error=>{console.log("failed to list all shops ," , error);})
}

module.exports.shop_delete_get = (req,res) => {
  Shop.findByIdAndDelete(req.query.id)
  .then(()=> {
    res.redirect("/shop/list")
  })
  .catch(error => {
    console.log("failed to delete the shop , " + error);
  })
}

module.exports.shop_edit_get = (req,res) => {
  Shop.findOne({_id:req.query.id})
  .then((shop)=> {
    console.log("the shop info for editing: ",shop);
    res.render("shop/edit" , {shop})
  })
  .catch(error => {
    console.log("error in editing shop ," , error);
  })
}

module.exports.shop_update_get = (req,res) => {
  let updatedShop = {
    name: req.body.name,
    logo: req.file.filename
  }
  Shop.findByIdAndUpdate(req.body.id , updatedShop)
  .then(() => {
    res.redirect("/shop/list")
  })
  .catch(error => {console.log("failed to update shop , " , error);})
}

module.exports.shop_admin_add_get = (req,res) => {
  if(req.user.role === 3){
    let  actionURLAdmin = "/shop/admin/add"
    res.render("shop/add" , {actionURLAdmin});
  }
}

module.exports.shop_admin_add_post = (req,res) => {
  console.log("reached to the shop_admin_add_post  function ");
  if(req.user.role === 3 ) {
    // store in object, the new info for adding a shp[]
    let addNewShop =new Shop({
      name: req.body.name,
      logo: req.file.filename
    })
    console.log("okay reached here")
// need to get the userId to add it to add it to addNewShop object
//so first through the username of the user, find the user._id
      User.findOne({username: req.body.username})
      //catch the result of the query through a variable
      .then((userInfo)=>{
        console.log("the user details for inserting shop via admin , " , userInfo);
        console.log("the user id for inserting shop via admin , " , userInfo._id);
        //add new property in the addNewShop called userId and store user._id that we got from userInfo
        addNewShop.userId = userInfo._id;
        //store record in db
        addNewShop.save()
       .then((shop) => {
        //redirect admin to add product page
        res.redirect("/product/add?shopid=" + shop._id+'&userid=' + shop.userId);
      })
       .catch(error => console.log("error on redirecting the admin to add product page and storing the record in db , " , error))
      })
      .catch(error => {console.log("error on getting user info and adding a shop to the user info , " , error);})
    
  
  }
}