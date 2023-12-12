const express = require('express');
const router = express.Router();

const Ordercontrolller = require('../controllers/order')

// router.get('/',Ordercontrolller.getAllOrders);
// router.post('/create',Ordercontrolller.createOrder);

router.get('/index', Ordercontrolller.order_index_get);
router.get('/detail', Ordercontrolller.oreder_detail_get);



module.exports = router;