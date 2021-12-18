const express = require("express");
const router = express.Router();
const Booking = require('../models/booking')
const Rental = require('../models/rentals')

router.post("/bookroom", async(req,res) => {
    const {
        rental,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        token
    } = req.body

    try {
        const newbooking = new Booking({
            rental : rental.name,
            rentalid : rental._id,
            userid,
            fromdate,
            todate,
            totalamount,
            totaldays,
            transactionId : token.paymentID
        })

        const booking = await newbooking.save()

        const rentaltemp = await Rental.findOne({_id : rental._id})

        rentaltemp.currentbookings.push({
            bookingid : booking._id , 
            fromdate : fromdate, 
            todate : todate, 
            userid : userid, 
            status : booking.status });

        await rentaltemp.save()

        res.send('Payment Successfull, Plan Booked Successfully')
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/getbookingsbyuserid", async (req, res) => {
    const userid = req.body.userid

    try {
        const bookings = await Booking.find({userid: userid})
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/cancelbooking", async (req, res) => {
    const {bookingid, rentalid} = req.body

    try {
        const bookingitem = await Booking.findOne({_id : bookingid})
        bookingitem.status = 'cancelled'
        await bookingitem.save()

        const rental = await Rental.findOne({_id : rentalid})

        const bookings = rental.currentbookings

        const temp = bookings.filter(booking => booking.bookingid.toString()!== bookingid)
        rental.currentbookings = temp

        await rental.save()

        res.send('Your booking cancelled successfully')

    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get("/getallbookings", async(req, res) => {
    try {
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });
    }
});


module.exports = router