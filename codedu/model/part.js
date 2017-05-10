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



module.exports = mongoose.model('part', partSchema)

// {
//   part_title: 'Javascript Basic of Basic',
//   quiz: [
//     {
//       quiz_title: 'First Step',
//       quiz_content: 'quiz1.md',
//       problems: 'problem1.json'
//     },
//     {
//       quiz_title: 'Variable',
//       quiz_content: 'quiz2.md',
//       problems: 'problem2.json'
//     }
//   ]
// }