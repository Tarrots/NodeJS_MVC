const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Education = new Schema({
  name: { type: String, default: '', maxLength: 255}, 
  phone: { type: String, default: '', maxLength: 255},
  mail: { type: String, default: '', maxLength: 255},
  address: { type: String, default: '', maxLength: 255}, 
})

module.exports = mongoose.model('Education', Education)