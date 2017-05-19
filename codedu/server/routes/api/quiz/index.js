const express = require('express')
const router = express.Router()
const path = require('path')
const Part = require('../../../../model/part')
const fs = require('fs')
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
var testQuizList = [];


router.get('/', function(req, res) {
  const quizTitle = req.query.quiz;
  console.log("localstorage is", localStorage.getItem('part_title'), localStorage.getItem('quiz_title'));

  if(localStorage.getItem('quiz_title') !== 'parttest'){
    Part.findOne({"quiz":{$elemMatch:{"quiz_title":quizTitle}}}, {"quiz":{$elemMatch:{"quiz_title":quizTitle}}, "quiz.problems":true}, function(err, part) {
      if(err) return res.status(500).json({error: err})
      if(!part) return res.status(404).json({error: "part not found"})
      const problem = part.quiz[0].problems[0]
      res.sendFile(path.resolve(__dirname, '../../../../public/problems/'+ problem))
    })
  }else{
    Part.find({"part_title":localStorage.getItem('part_title')}, function(err, part){
      const quizList = part[0].quiz;
      for(v of quizList){
        fs.readFile(path.resolve(__dirname, '../../../../public/problems/'+v.problems), 'utf8', function(err, data) {
          if(err) return console.log(err)
          const datas = JSON.parse(data);
          const test = [];
          let randomArr = [];
          let cnt = Math.floor(datas.length / 2);
          while(cnt !== 0){
            var random = Math.floor(Math.random() * datas.length);
            if(randomArr.indexOf(random) == -1){
              randomArr.push(random);
              testQuizList.push(datas[random]);
              cnt--;
            }
          }
        })
      }
      console.log("testQuizList is", testQuizList);
      res.send(testQuizList);
    })
  }
})

module.exports = router