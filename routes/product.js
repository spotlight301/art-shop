const express = require("express");

const methodOverride = require("method-override");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(methodOverride("_method"));

const productController = require("../controllers/product");
const upload = require("../config/multer");
const { authorized_user, isLogged } = require("../config/authorization");

router.get(
  "/add",
  isLogged,
  authorized_user([2,3]),
  productController.product_create_get
);
router.post(
  "/add",
  isLogged,
  authorized_user([2,3]),
  upload.single("image"),
  productController.product_create_post
);
router.get("/detail", productController.product_show_get);
router.get("/list", productController.product_list_get);
// router.post('/detail/addToCart' , productController.product_show_post);

// router.get('/add' , productController.)
router.get(
  "/edit",
  isLogged,
  authorized_user([2,3]),
  productController.product_edit_get
);
router.put(
  "/update",
  isLogged,
  authorized_user([2,3]),
  upload.single("image"),
  productController.product_update_put
);
router.get(
  "/delete",
  isLogged,
  authorized_user([2,3]),
  productController.product_delete_get
);

module.exports = router;
