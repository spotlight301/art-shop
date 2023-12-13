const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");
const upload = require("../config/multer");

const { authorized_user, isLogged } = require("../config/authorization");

// router.get('/shop', shopController.shop_create_get);

router.get(
  "/add",
  isLogged,
  authorized_user(2),
  shopController.shop_create_get
);
router.post(
  "/add",
  isLogged,
  authorized_user(2),
  upload.single("logo"),
  shopController.shop_create_post
);
router.get(
  "/index/:id",
  isLogged,
  authorized_user(2),
  shopController.shop_index_get
);

module.exports = router;
