const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/add' , productController.product_create_get);
router.post('/add' , productController.product_create_post);

// router.get('/add' , productController.)





module.exports = router;