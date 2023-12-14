

const  {Product} = require("../models/Product");
exports.index_get = async (req, res) => {
  try {
    // Fetch three random products from the database
    const randomProducts = await Product.aggregate([{ $sample: { size: 3 } }]);

    // If the user is logged in and has an id set and does not have a profile
    if (req.user && req.user._id && !req.user.isProfileSet) {
      // Redirect to profile
      res.redirect("/user/profile");
    } else {
      res.render("home", {
        message: "everything is working, welcome to artist website",
        randomProducts, // Pass the random products to the template
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};