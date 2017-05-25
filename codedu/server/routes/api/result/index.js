const express = require('express')
const router = express.Router()
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const mysqlConfig = require('../../../../config/mysql_config')

//MySQL
let mysql = require('mysql');
let connection = mysql.createConnection(mysqlConfig);

router.post('/', function(req, res) {

  console.log("localstorage is", localStorage.getItem('part_title'), localStorage.getItem('quiz_title'));
  const partTitle = localStorage.getItem('part_title');
  const quizTitle = localStorage.getItem('quiz_title');


  const score = req.body.score
  const email = req.body.email

  const query = connection.query('Select * from user where email = ?', [email], function(err, rows) {
    if(err) return err

    if(rows) {
      progressJson = JSON.parse(rows[0].progress);
      progressItem = progressJson.items;
      console.log("before progressJson",progressJson);

      var updateStr = "";
      if(progressItem.length === 0){
        console.log("items가 비어있다");
          if(quizTitle !== "parttest"){
            updateStr = '{"part_title": "'+ partTitle +'", "quiz_title": ["'+ quizTitle +'"], "is_test_done": 0}';
          }else{
            updateStr = '{"part_title": "'+ partTitle +'", "quiz_title": [], "is_test_done": 1}';
          }
          progressItem.push(JSON.parse(updateStr));

      }else{
        for (v of progressItem) {
          if (v.part_title === partTitle) {
            const partIndex = progressItem.findIndex((items) => {return items.part_title === partTitle;});
            console.log("파트가 ", partIndex ,"번째 디비에 있다");
            if (quizTitle === "parttest") {
              console.log("테스트 퀴즈입니다");
              progressItem[partIndex].is_test_done = 1;
              break;
            } else {
              console.log("일반 퀴즈입니다", quizTitle);

              if(progressItem[partIndex].quiz_title.indexOf(quizTitle) !== -1){
                console.log("이미 푼 퀴즈입니다");
                break;
              }else{
                console.log("새로 푼 퀴즈입니다");

                progressItem[partIndex].quiz_title.push(quizTitle);
                break;
              }
            }
          }else{
            console.log("파트가 디비에 없다");
            if(quizTitle !== "parttest"){
              console.log("일반 퀴즈입니다");
              updateStr = '{"part_title": "'+ partTitle +'", "quiz_title": ["'+ quizTitle +'"], "is_test_done": 0}';
              progressItem.push(JSON.parse(updateStr));
              break;
            }else{
              console.log("테스트 퀴즈입니다");
              updateStr = '{"part_title": "'+ partTitle +'", "quiz_title": [], "is_test_done": 1}';
              progressItem.push(JSON.parse(updateStr));
              break;
            }
          }
        }

      }
      console.log("after progressJson",progressJson);
      const progress = JSON.stringify(progressJson);

      const currentExp = rows[0].exp
      const totalExp = currentExp + score * 5;

      const update = connection.query('UPDATE user set exp = ?, progress = ? where email = ?', [totalExp, progress, email], function(err, rows) {
        if(err) return err

        res.json({result: "ok", exp: totalExp})
      })
    }
  })
})

module.exports = router