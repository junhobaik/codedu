const mongoose = require('mongoose')
const Schema = mongoose.Schema

const problemSchema = new Schema({
  quiz_title: String,
  problems_content: []
})

module.exports = mongoose.model('problem', preblemSchema)