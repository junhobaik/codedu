const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const mysqlConfig = require('../../../../config/mysql_config');

//MySQL
let mysql = require('mysql');
let connection = mysql.createConnection(mysqlConfig);

router.post('/', function(req, res) {

  console.log("localstorage is", localStorage.getItem('part_title'), localStorage.getItem('quiz_title'));
  const partTitle = localStorage.getItem('part_title');
  const quizTitle = localStorage.getItem('quiz_title');


  const score = req.body.score;
  const email = req.body.email;

  const query = connection.query('Select * from user where email = ?', [email], function(err, rows) {
    if(err) return err;

    if(rows) {
      let progressJson = JSON.parse(rows[0].progress);
      let progressItem = progressJson.items;
      console.log("before progressJson", progressJson);

      let updateStr = "";

      const partIndex = progressItem.findIndex((items) => {return items.part_title === partTitle;});
      console.log("partIndex", partIndex);

      if(partIndex === -1){
        console.log("해당 파트는 DB에 없습니다");

        if(quizTitle !== "parttest"){
          console.log("해당 퀴즈는 일반 퀴즈입니다");
          updateStr = '{"part_title": "'+ partTitle +'", "quiz_title": ["'+ quizTitle +'"], "is_test_done": 0}';
        }else{
          console.log("해당 퀴즈는 테스트 퀴즈입니다");
          updateStr = '{"part_title": "'+ partTitle +'", "quiz_title": [], "is_test_done": 1}';
        }
        progressItem.push(JSON.parse(updateStr));

      }else{
          console.log("해당 파트는 ", partIndex ,"번째 DB에 있습니다");
          if(quizTitle === "parttest"){
            console.log("해당 퀴즈는 테스트 퀴즈입니다");
            progressItem[partIndex].is_test_done = 1;
          }else{
            console.log("해당 퀴즈는 일반 퀴즈입니다");
            if(progressItem[partIndex].quiz_title.indexOf(quizTitle) !== -1) {
              console.log("해당 퀴즈는 이미 풀었던 퀴즈입니다");
            }else{
              console.log("해당 퀴즈는 새로 푼 퀴즈입니다");
              progressItem[partIndex].quiz_title.push(quizTitle);
            }
          }
      }

      console.log("after progressJson",progressJson);
      const progress = JSON.stringify(progressJson);

      const currentExp = rows[0].exp;
      const totalExp = currentExp + score * 5;

      const update = connection.query('UPDATE user set exp = ?, progress = ? where email = ?', [totalExp, progress, email], function(err, rows) {
        if(err) return err;

        res.json({result: "ok", exp: totalExp})
      })
    }
  })
});

module.exports = router;