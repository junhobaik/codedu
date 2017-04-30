const express = require('express')
const router = express.Router()
const app = express()
const path = require('path')

var bodyParser = require('body-parser')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')
var flash = require('connect-flash')

const mysqlConfig = require('../../../../config/mysql_config')

//MySQL
var mysql = require('mysql');
var connection = mysql.createConnection(mysqlConfig);

router.post('/', function(req, res, next) {
  const temp = req.body
  console.log(temp)

  let email = 'test@test.com'

  let queryString = 'SELECT * FROM user WHERE email = ?'
  connection.query(queryString, [email], function(err, rows, fields) {
      if(err) throw err

      if(rows.length === 1) {
          for(let i in rows) {
              console.log(rows[0])
          }
      }
  })

})

module.exports = router