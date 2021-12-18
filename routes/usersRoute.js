const express = require('express');
const router = express.Router();

const User = require('../models/user')

router.post("/register", async(req,res) => {

    const newuser = new User({name : req.body.name, email : req.body.email, password : req.body.password})

    try {
        const user = await newuser.save();
        res.send('User registered successfully')
    } catch (error) {
        return res.status(400).json({  error });
    }

});

router.post("/login", async(req,res) => {

    const {email, password} = req.body

    try {
        const user = await User.findOne({email : email , password : password})
        if (user) {
            res.send(user) 
        }else{
            return res.status(400).json({ message : 'Login Faield' });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }

});

router.get("/getallusers", async(req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;