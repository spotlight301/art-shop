const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");
const { authorized_user, isLogged } = require("../config/authorization");

router.get("/add", isLogged, cartController.cart_add_get);
router.post("/add", isLogged, cartController.cart_add_post);
router.get("/delete", isLogged, cartController.cart_delete_get);

module.exports = router;
