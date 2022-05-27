const mongoose = require('mongoose')
const Schema = mongoose.Schema

const course = new Schema({
  name: { type: String, default: '', maxLength: 255}, 
  phone: { type: String, default: '', maxLength: 255},
  mail: { type: String, default: '', maxLength: 255},
  address: { type: String, default: '', maxLength: 255},
},{ timestamps: true }) // * createdAt and updatedAt

module.exports = mongoose.model('course', course) // ? Name model must 'it' -> Schema covert 'its'