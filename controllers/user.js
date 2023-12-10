const {Shop} = require('../models/Shop');
const {Product} = require('../models/Product');
const {order} = require('../models/Order');


module.exports.get_profile = (req,res) => {
  res.render('user/profile');
}