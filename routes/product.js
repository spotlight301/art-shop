const express = require('express');

const methodOverride = require('method-override');
const router = express.Router();

router.use(express.urlencoded({extended: true}));
router.use(methodOverride('_method'));

const productController = require('../controllers/product');
const upload = require('../config/multer'); 

router.get('/add' , productController.product_create_get);
router.post('/add' ,upload.single('image'), productController.product_create_post);
router.get('/detail' , productController.product_show_get);
router.get('/list', productController.product_list_get);
// router.post('/detail/addToCart' , productController.product_show_post);

// router.get('/add' , productController.)
router.get('/edit', productController.product_edit_get)
router.put('/update', productController.product_update_put)





module.exports = router;