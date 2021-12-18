const mongoose = require("mongoose");

var connection = mongoose.connection

connection.on('open', ()=>{
    console.log('DB Connected')
})

/* connection.on('error', ()=>{
    console.log('Mongo DB Connection false')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Sucessful')
}) */

async function connectDb ({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, {useNewUrlParser: true})
}

module.exports = connectDb