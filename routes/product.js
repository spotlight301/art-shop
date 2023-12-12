const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const upload = require('../config/multer'); 

router.get('/add' , productController.product_create_get);
router.post('/add' ,upload.single('image'), productController.product_create_post);
router.get('/detail' , productController.product_show_get);
router.post('/detail/addToCart' , productController.product_show_post);

// router.get('/add' , productController.)





module.exports = router;