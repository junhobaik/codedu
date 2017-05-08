const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partSchema = new Schema({
  part_title: String,
  quiz: [quizSchema] 
})

const quizSchema = new Schema({
  quiz_title: String,
  quiz_content: String,
  problems: [String]
})

module.exports = mongoose.model('part', partSchema)

// {
//   part_title: Part1,
//   quiz: [
//     {
//       quiz_title: Quiz1,
//       quiz_content: quiz1.md,
//       problems: [pro1.md, pro2.md, pro3.md]
//     },
//     {
//       quiz_title: Quiz2,
//       quiz_content: quiz2.md,
//       problems: [pro1.md, pro2.md, pro3.md]
//     },
//     {
//       quiz_title: Quiz3,
//       quiz_content: quiz3.md,
//       problems: [pro1.md, pro2.md, pro3.md]
//     }
//   ]
// }