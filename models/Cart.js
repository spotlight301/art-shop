const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    quantity: Number,
    price: Number,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: Number,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

// Module Export
module.exports = {Cart};
