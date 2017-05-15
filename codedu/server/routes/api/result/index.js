const express = require('express')
const router = express.Router()

const mysqlConfig = require('../../../../config/mysql_config')

//MySQL
let mysql = require('mysql');
let connection = mysql.createConnection(mysqlConfig);

router.post('/', function(req, res) {
  const gainExp = req.body.gainExp
  const email = req.body.email

  console.log("gain exp ", gainExp)

  const queryString = 'UPDATE user set exp = ? where email = ?'
  const query = connection.query(queryString, [gainExp, email], function(err, rows) {
    if(err) return err

    res.json({result: "ok"})

  })
})

module.exports = router