const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const upload = require('../config/multer'); 

router.get('/profile' , userController.profile_create_get);
router.post('/profile/create' , upload.single('avatar') , userController.profile_create_post );







module.exports = router;