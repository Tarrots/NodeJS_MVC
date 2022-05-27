const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/nodejs_dev')
        console.log("Connect Successfully!!!")
    } catch (error) {
        console.log("Connect Failure!!!")
        console.log(error)
    }
}

module.exports = { connect }