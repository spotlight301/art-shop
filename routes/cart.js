const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart')

router.get('/add', cartController.cart_add_get);
router.post('/add', cartController.cart_add_post);


module.exports = router;