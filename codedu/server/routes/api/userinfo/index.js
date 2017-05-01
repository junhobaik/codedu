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
    
  const {email, password, newPassword, photo} = req.body;
  console.log(req.body)

  const selectUser = 'SELECT * FROM user WHERE email = ? AND password = ?'
  const updateUser = 'UPDATE user SET password = ?, photo = ? WHERE email = ?'

  connection.query(selectUser, [email, password], function(err, rows) {
      if(err) throw err

      if(rows.length === 1) {
          console.log('selected: ')
          console.log(rows[0])

          connection.query(updateUser, [newPassword, photo, email], function(err, rows) {
              if(err) throw err
              if(rows) {
                  console.log('update successful:')
                  console.log(rows)
              }
          })
      } else {
          console.log('wrong id, pw')
      }
  })

})

module.exports = router