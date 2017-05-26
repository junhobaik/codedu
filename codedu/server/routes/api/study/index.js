const express = require('express')
const router = express.Router()
const Part = require('../../../../model/part')
const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

router.get('/:quiz', function(req, res) {
  //param is "javascript Basic of Basic-First Step"
  const reqParam = req.params.quiz.split("&");

  localStorage.setItem('part_title', reqParam[0]);
  localStorage.setItem('quiz_title', reqParam[1]);
  console.log("localstorage is", localStorage.getItem('part_title'), localStorage.getItem('quiz_title'));

  if(reqParam[1] !== "parttest"){
    Part.find({$and:[{part_title:reqParam[0]},{quiz:{$elemMatch:{quiz_title:reqParam[1]}}}]}, {part_title:true, quiz:{$elemMatch:{quiz_title:reqParam[1]}}}, function(err, part) {
      if(err) return console.error(err)
      console.log("res.json is" ,part)
      const pathString = part[0].quiz[0].quiz_content

      fs.readFile(path.resolve(__dirname, '../../../../public/subjects/'+pathString), 'utf8', function(err, data) {
        if(err) return console.log(err)
        part[0].quiz[0].quiz_content = data
        console.log("part is", part);
        console.log("part.quiz is", part[0].quiz)
        res.json(part)
      })
    })
  } else {
    const part = [{
      part_title: reqParam[0],
      quiz: [{
        quiz_title: "TEST",
        quiz_content: "# " + reqParam[0] + "의 TEST 입니다.",
        problems: null
      }]
    }]
    res.json(part);
  }

})

module.exports = router
