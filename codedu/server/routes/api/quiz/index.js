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
    Part.find({"part_title":localStorage.getItem('part_title')}, function(err, part){
      const quizList = part[0].quiz;
      for(let i = 0; i < quizList.length; i++){
        fs.readFile(path.resolve(__dirname, '../../../../public/problems/'+quizList[i].problems), 'utf8', function(err, data) {
          if(err) return console.log(err)
          if(i === 0) {
            localStorage.setItem('testQuizList', "");
          }
          const datas = JSON.parse(data);
          let QuizListStr = "";

          let randomArr = [];
          let cnt = Math.floor(datas.length / 2);

          while(cnt !== 0){
            var random = Math.floor(Math.random() * datas.length);

            if(randomArr.indexOf(random) == -1){
              randomArr.push(random);

              QuizListStr += JSON.stringify(datas[random]);

              cnt--;
            }
          }
          localStorage.setItem('testQuizList', localStorage.getItem('testQuizList') + QuizListStr);
        })
      }

      let str = "[" + localStorage.getItem('testQuizList') + "]"
      const TestQuizList = JSON.parse(str.replace(/}{"content"/g, '},{"content"' ));
      res.send(TestQuizList);
    })
  }
})

module.exports = router

/*



          */