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
      const currentExp = rows[0].exp
      const totalExp = currentExp + score * 5;
      const update = connection.query('UPDATE user set exp = ? where email = ?', [totalExp, email], function(err, rows) {
        if(err) return err

        res.json({result: "ok", exp: totalExp})
      })
    }
  })
})

module.exports = router