const express = require('express')
const router = express.Router()
const app = express()
const path = require('path')

var bodyParser = require('body-parser')

const mysqlConfig = require('../../../../config/mysql_config')

//MySQL
var mysql = require('mysql');
var connection = mysql.createConnection(mysqlConfig);


router.post('/', function(req, res, next) {
    
  const {email} = req.body;

  const selectUser = 'SELECT * FROM user WHERE email = ?'

  connection.query(selectUser, [email], function(err, rows) {
      if(err) throw err

      if(rows.length === 1) {
          res.send(rows[0])
      } else {
          console.log('wrong id')
          res.send(err)
      }
  })

})

module.exports = router
