const express = require('express')
const router = express.Router()

const mysqlConfig = require('../../../../config/mysql_config')

//MySQL
let mysql = require('mysql');
let connection = mysql.createConnection(mysqlConfig);

router.post('/', function(req, res) {
  const score = req.body.score
  const email = req.body.email

  const query = connection.query('Select * from user where email = ?', [email], function(err, rows) {
    if(err) return err

    if(rows) {
      const currentExp = rows[0].exp;
      const totalExp = currentExp + score * 5;
      let daysOfWeek = rows[0].days_of_week;  // 월화수목금토일
      let today = new Date().getDay();  // 일월화수목금토 index: 0,1,2,3,4,5,6
      today--;
      
      if(today < 0) {
        today = 6;
      }

      daysOfWeek = daysOfWeek.substr(0, today) + 'Y' + daysOfWeek.substr(today + 1);
      console.log(daysOfWeek);

      const update = connection.query('UPDATE user set exp = ?, days_of_week = ? where email = ?', [totalExp, daysOfWeek, email], function(err, rows) {
        if(err) return err

        res.json({result: "ok", exp: totalExp})
      })
    }
  })
})

module.exports = router