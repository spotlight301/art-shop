const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');


// router.get('/shop', shopController.shop_create_get);


router.get("/index", shopController.shop_index_get);

module.exports = router;