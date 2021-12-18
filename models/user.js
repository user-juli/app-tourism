const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type: String , 
        required: true 
    },
    email : {
        type: String , 
        unique: true, 
        lowercase: true, 
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password : {
        type: String, 
        min: [8, 'Too short, min is 8 characters'], 
        max: [32, 'Too long, max is 32 characters'], 
        required: true },
    isAdmin : {
        type: Boolean, 
        default: false 
    }
} , {
    timestamps : true,
})

const userModel = mongoose.model('users' , userSchema)

module.exports = userModel