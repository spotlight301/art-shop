const express = require("express");
const router = express.Router();

const Ordercontrolller = require("../controllers/order");

// router.get('/',Ordercontrolller.getAllOrders);
// router.post('/create',Ordercontrolller.createOrder);
router.get("/index", Ordercontrolller.order_index_get);
router.post("/add", Ordercontrolller.order_add_post);
router.get("/detail", Ordercontrolller.order_show_get);

module.exports = router;
