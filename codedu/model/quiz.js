const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({
  quiz_title: String,
  quiz_content: String
})

module.exports = mongoose.model('quizs', quizSchema)