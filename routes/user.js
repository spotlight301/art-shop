const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const upload = require("../config/multer");
const { authorized_user, isLogged } = require("../config/authorization");

router.get("/profile", isLogged, userController.profile_create_get);
router.post(
  "/profile/create",
  isLogged,
  upload.single("avatar"),
  userController.profile_create_post
);

module.exports = router;
