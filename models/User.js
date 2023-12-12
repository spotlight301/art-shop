const mongoose = require("mongoose");
// const  role = require('kjafhd')

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      // required: true,
      trim: true,
      unique: false,
    },
    name: String,
    googleId: {
      type: String,
      required: true,
      unique: false,
    },
    email: String,
    DOB: Date,
    phoneNumber: String,
    avatar: String,
    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comments'
    // }],
    role: Number,
    isProfileSet: Boolean,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

const cartSchema = mongoose.Schema(
  {
    quantity: Number,
    price: Number,
    userId: [userSchema],
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

// Module Export
module.exports = Cart;
module.exports = User;
