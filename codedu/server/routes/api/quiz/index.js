const express = require('express')
const router = express.Router()
const path = require('path')
const Part = require('../../../../model/part')

router.get('/', function(req, res) {

  const quizTitle = "First Step";

  Part.findOne({"quiz":{$elemMatch:{"quiz_title":quizTitle}}}, {"quiz":{$elemMatch:{"quiz_title":quizTitle}}, "quiz.problems":true}, function(err, part) {
    if(err) return res.status(500).json({error: err})
    if(!part) return res.status(404).json({error: "part not found"})
    console.log(part.quiz[0].problems[0])
    const problem = part.quiz[0].problems[0]
    //res.json(part)

    res.sendFile(path.resolve(__dirname, '../../../../public/problems/'+ problem))
  })

  // Part.find(function(err, part) {
  //   if(err) return res.status(500).json({error: err})
  //   console.log(part)
  //   res.json(part)
  // })

  
  //res.sendFile(path.resolve(__dirname, '../../../../public/problems/problem1.json'))
})

module.exports = router