const express = require('express')
const router = express.Router()
const Quiz = require('../../../../model/quiz')

router.get('/:quiz', function(req, res) {
  console.log(req.params)
  Quiz.findOne({quiz_title: req.params.quiz}, function(err, quizs) {
    if(err) return console.error(err)
    res.json(quizs)
  })
})

module.exports = router