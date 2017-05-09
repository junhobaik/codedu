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





  // {
  //   part_title: 'Javascirpt Basic of Basic',
  //   quiz: [
  //     {
  //       order: 0,
  //       quiz_title: 'First Step',
  //       quiz_content: 'quiz1.md',
  //       problems: [{prob:'pro1.md', ans:3}, 'pro2.md', 'pro3.md', 'pro4.md', 'pro5.md']
  //     },
  //     {
  //       quiz_title: 'Variable',
  //       quiz_content: 'quiz2.md',
  //       problems: ['pro1.md', 'pro2.md', 'pro3.md', 'pro4.md', 'pro5.md']
  //     }
  //   ]
  // }

