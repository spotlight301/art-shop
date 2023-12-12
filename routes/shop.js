const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');
const upload = require('../config/multer'); 


// router.get('/shop', shopController.shop_create_get);


router.get("/add", shopController.shop_create_get);
router.post("/add", upload.single('logo') , shopController.shop_create_post);
router.get("/index", shopController.shop_index_get);


module.exports = router;