const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partSchema = new Schema({
  part_title: String,
  quiz_title: [String] 
})

module.exports = mongoose.model('part', partSchema)