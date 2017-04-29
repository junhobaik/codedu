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
  var query = connection.query('select * from user where email=?', [email], function (err, rows) {
    if (err) return done(err); 
    if (rows.length) {
      console.log('existed user');
      return done(null, false, {
        message: 'your email is already used'
      })
    } else {
      var sql = {
        email: email,
        password: password
      };
      var query = connection.query('insert into user set ?', sql, function (err, rows) {
        if (err) throw err;
        console.log("ok")
        return done(null, {
          'email': email,
          'id': rows.insertId
        })
      })
    }
  })
})

module.exports = router