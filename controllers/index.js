exports.index_get = (req, res) => {
  // If the user is logged in and has an id set and does not have a profile
  if (req.user && req.user._id && !req.user.isProfileSet) {
    // Redirect to profile
    res.redirect("/user/profile");
  } else {
    res.render("home", {
      message: "everything is working, welcome to artist website",
    });
  }
};
