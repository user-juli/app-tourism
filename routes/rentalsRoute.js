const express = require("express");
const router = express.Router();
const Rental = require('../models/rentals')
const upload = require('../libs/storage')

router.get("/getallrentals", async (req, res) => {

    try {
        const rentals = await Rental.find({})
        /* return res.json({ rooms }); */
        res.send(rentals)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/getrentalbyid", async (req, res) => {

    const rentalid = req.body.rentalid

    try {
        const rental = await Rental.findOne({ _id: rentalid })
        res.send(rental)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.get("/getallrentals", async (req, res) => {
    try {
        const rentals = await Rental.find()
        res.send(rentals)
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/addrental", upload.array('imageurls', 5), async (req, res) => {
    const {
        name,
        mincount,
        maxcount,
        rentperday,
        destiny,
        description,
        include,
        noinclude,
        recommen,
        restri
    } = req.body

    const reqFiles = [];

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    } else {
        const url = req.protocol + '://' + req.get('host')
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push(url + '/storage/images/' + req.files[i].filename)
        }
        //console.log(reqFiles)
    }

    try {
        const newrental = new Rental({
            name,
            mincount,
            maxcount,
            rentperday,
            imageurls: reqFiles,
            destiny,
            description,
            include,
            noinclude,
            recommen,
            restri
        })

        await newrental.save()

        res.send('New Plan Added Successfully')
    } catch (error) {
        return res.status(400).json({ error });
    }
    
});

module.exports = router;