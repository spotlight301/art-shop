const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: String,
    logo: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

// Module Exports
const Shop = mongoose.model('Shop', shopSchema)
module.exports = {Shop};