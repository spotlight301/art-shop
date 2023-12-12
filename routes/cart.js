const express = require('express');
const router = express.Router();

let cartItems = [];

router.get('/', (req, res) => {
  res.render('cart', { cartItems });
});
-
router.post('/add', (req, res) => {
  const { productId, productName, price } = req.body;
  cartItems.push({ productId, productName, price });
  res.redirect('/cart');
});

module.exports = router;