const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({
  quiz_title: String,
  quiz_content: String,
  problems: [String]
})

const partSchema = new Schema({
  part_title: String,
  quiz: [quizSchema] 
})

module.exports = mongoose.model('Part', partSchema)
