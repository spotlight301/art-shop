const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/profile' , userController.get_profile );







module.exports = router;