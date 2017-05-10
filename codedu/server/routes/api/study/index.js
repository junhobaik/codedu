const express = require('express')
const router = express.Router()
const Part = require('../../../../model/part')
const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')

router.get('/:quiz', function(req, res) {
  //param is "javascript Basic of Basic-First Step"
  const reqParam = req.params.quiz.split("&");

  Part.find({$and:[{part_title:reqParam[0]},{quiz:{$elemMatch:{quiz_title:reqParam[1]}}}]}, {part_title:true, quiz:{$elemMatch:{quiz_title:reqParam[1]}}}, function(err, part) {
    if(err) return console.error(err)
    console.log("res.json is" ,part)
    
    const pathString = part[0].quiz[0].quiz_content
    fs.readFile(path.resolve(__dirname, '../../../../public/subjects/'+pathString), 'utf8', function(err, data) {
      if(err) return console.log(err)
      console.log(data)
      part[0].quiz[0].quiz_content = data
      res.json(part)
    })
  })
})

module.exports = router
