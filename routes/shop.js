const express = require('express');

const router = express.Router();

const ArtistPageController = require('../controllers/shop');


router.get('/shop', indexController.index_get);




module.exports = router;