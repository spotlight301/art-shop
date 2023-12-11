const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/create' , productController.product_create_get);






module.exports = router;