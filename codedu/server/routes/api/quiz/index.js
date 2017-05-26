const express = require('express')
const router = express.Router()
const path = require('path')
const Part = require('../../../../model/part')
const fs = require('fs')
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');


router.get('/', function(req, res) {
  const quizTitle = req.query.quiz;
  //localStorage.clear();
  console.log("localstorage is", localStorage.getItem('part_title'), localStorage.getItem('quiz_title'));

  if(localStorage.getItem('quiz_title') !== 'parttest'){
    Part.findOne({"quiz":{$elemMatch:{"quiz_title":quizTitle}}}, {"quiz":{$elemMatch:{"quiz_title":quizTitle}}, "quiz.problems":true}, function(err, part) {
      if(err) return res.status(500).json({error: err})
      if(!part) return res.status(404).json({error: "part not found"})
      const problem = part.quiz[0].problems[0]
      res.sendFile(path.resolve(__dirname, '../../../../public/problems/'+ problem))
    })
  }else{
    console.log("test quiz start");
    Part.find({"part_title":localStorage.getItem('part_title')}, function(err, part){
      const quizList = part[0].quiz;
      for(let i = 0; i < quizList.length; i++){
        fs.readFile(path.resolve(__dirname, '../../../../public/problems/'+quizList[i].problems), 'utf8', function(err, data) {
          console.log(i,"번째 fs");
          if(err) return console.log(err);
      
          let datas = JSON.parse(data);
          let dataStr = "";

          let randomArr = [];
          let cnt = Math.floor(datas.length / 2);
          while(cnt !== 0){
            let random = Math.floor(Math.random() * datas.length);
            if(randomArr.indexOf(random) === -1){
              randomArr.push(random);
              dataStr += (JSON.stringify(datas[random]));
              cnt--;
            }
          }

          if(i==0) var oldStorage = "";
          else oldStorage = localStorage.getItem('testQuizList');

          let newStorage = oldStorage + dataStr;
          localStorage.setItem('testQuizList', newStorage);

          if(i === (quizList.length - 1)){
            console.log("마지막");

            let str = "[" + localStorage.getItem('testQuizList') + "]"
            let TestQuizList = JSON.parse(str.replace(/}{"content"/g, '},{"content"' ));
            console.log(TestQuizList);
            res.send(TestQuizList);
          }
        })
      }
      

    })
  }
})

module.exports = router

/*



          */