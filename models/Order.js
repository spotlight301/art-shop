const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  status: String,
} , 
{
  timestamps: true
})