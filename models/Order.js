const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  status: String,
  product:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product'
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
} , 
{
  timestamps: true
})

const Order = mongoose.model('Order' , orderSchema);

module.exports = {Order};