const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    rental : {
        type: String ,required: true
    },
    rentalid : {
        type: String ,required: true
    },
    userid : {
        type: String ,required: true
    },
    fromdate : {
        type: String ,required: true
    },
    todate : {
        type: String ,required: true
    },
    totalamount : {
        type: Number ,required: true
    },
    totaldays : {
        type: Number ,required: true
    },
    transactionId : {
        type: String ,required: true
    },
    status : {
        type: String ,required: true,default : 'booked'
    }
}, {
    timestamps : true,
})

const bookingModel = mongoose.model('booking' , bookingSchema)

module.exports = bookingModel