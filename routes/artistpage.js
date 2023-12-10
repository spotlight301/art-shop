const express = require('express');

const router = express.Router();

const ArtistPageController = require('../controllers/artistpage');


router.get('/artist', indexController.index_get);




module.exports = router;