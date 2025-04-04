const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },

})


const User = mongoose.model("User", UserSchema)


module.exports = User;