const express = require('express')

const app = express();

const rentalsRoute = require('./routes/rentalsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')

app.use(express.json())

app.use('/api/rentals' , rentalsRoute)
app.use('/api/users' , usersRoute)
app.use('/api/bookings' , bookingsRoute)

module.exports = app