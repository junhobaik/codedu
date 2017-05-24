const mongoose = require('mongoose')
const Schema = mongoose.Schema

const problemsSchema = new Schema({
  problems_content: String,
  problems_items: [String],
  problems_answer: Number
})

const subjectSchema = new Schema({
  subject_title: String,
  subject_content: String,
  problems: [problemsSchema]
})

const partSchema = new Schema({
  part_title: String,
  subject: [subjectSchema] 
})

const lectureSchema = new Schema({
  lecture_title: String,
  part: [partSchema]
})

module.exports = mongoose.model('Lecture', lectureSchema)