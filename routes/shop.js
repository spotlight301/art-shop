const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");
const upload = require("../config/multer");

const { authorized_user, isLogged } = require("../config/authorization");

// router.get('/shop', shopController.shop_create_get);

router.get(
  "/add",
  isLogged,
  authorized_user([2]),
  shopController.shop_create_get
);
router.post( "/add", isLogged,authorized_user([2]),upload.single("logo"),shopController.shop_create_post
);

router.get(
  "/index/:id",
  isLogged,
  authorized_user([2]),
  shopController.shop_index_get
);

router.get("/list" , isLogged , shopController.shop_list_get)
router.get("/delete" , isLogged , shopController.shop_delete_get)
router.get("/edit" , isLogged , shopController.shop_edit_get)
router.post("/update" , isLogged , upload.single("logo"), shopController.shop_update_get)

router.get("/admin/add", isLogged,authorized_user([3]), shopController.shop_admin_add_get)

router.post( "/admin/add", isLogged,authorized_user([3]),  upload.single("logo"),shopController.shop_admin_add_post
);


module.exports = router;
