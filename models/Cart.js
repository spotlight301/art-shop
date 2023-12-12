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
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
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