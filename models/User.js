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
    // DOB:
    phoneNumber: String,
    Avatar: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    shop: {
        
    },
    cart: {

    },
    role: Number
})


const User = mongoose.model("User", userSchema);

// Module Export

module.exports = User