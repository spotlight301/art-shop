const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productName: String,
  price: Number,
  description: String,
  image:String,
  shop:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Shop'
  },
  order:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Order'
  },
  productType:String
},
 {timestamps: true}
 );

 // create product model
 const Product = mongoose.model("Product" , productSchema);

 //export model
 module.exports = {Product};