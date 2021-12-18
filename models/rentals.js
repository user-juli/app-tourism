const mongoose = require("mongoose");

const rentalSchema = mongoose.Schema({
    name : {type: String , required: true},
    mincount : {type: Number ,required: true},
    maxcount : {type: Number ,required: true},
    rentperday : {type: Number ,required: true},
    imageurls : [],
    currentbookings : [],
    destiny : {type: String, required: true},
    description : {type: String,required: true },
    include : {type: String , required: true, lowercase: true},
    noinclude : {type: String , required: true, lowercase: true},
    recommen : {type: String, lowercase: true },
    restri : {type: String, lowercase: true },
} , {
    timestamps : true,
})

const rentalModel = mongoose.model('rental' , rentalSchema)

module.exports = rentalModel