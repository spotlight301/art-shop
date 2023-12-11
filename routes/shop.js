const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');


// router.get('/shop', shopController.shop_create_get);


router.get("/index", shopController.shop_index_get);
router.get("/add", shopController.shop_create_get);
router.post("/add", shopController.shop_create_post);

module.exports = router;