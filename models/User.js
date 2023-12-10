const mongoose = require('mongoose');
// const  role = require('kjafhd')


const userSchema = mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        unique: true
    },
    email: String,
    name: String,
    DOB: Date,
    phoneNumber: String,
    Avatar: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    role: Number
})

const User = mongoose.model("User", userSchema);

const cartSchema = mongoose.Schema({
    quantity: Number,
    price: Number,
    userId: [userSchema],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }]
})

const Cart = mongoose.model('Cart', cartSchema);


// Module Export

module.exports = {User, Cart};