const mongoose = require("mongoose");

var connection = mongoose.connection

connection.on('open', ()=>{
    console.log('Mongo DB Connection Sucessfully')
})

async function connectDb ({ uri }) {
    const mongoURL = uri
    await mongoose.connect(mongoURL, {useNewUrlParser: true})
}

module.exports = connectDb