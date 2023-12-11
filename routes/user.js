const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/profile' , userController.profile_create_get);
router.post('/profile/create' , userController.profile_create_post );







module.exports = router;