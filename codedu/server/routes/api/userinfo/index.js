const express = require('express')
const router = express.Router()
const app = express()
const path = require('path')

var bodyParser = require('body-parser')

const mysqlConfig = require('../../../../config/mysql_config')

//MySQL
var mysql = require('mysql');
var connection = mysql.createConnection(mysqlConfig);

router.post('/', function (req, res, next) {

    const { email, password, newPassword, photo } = req.body;
    console.log(req.body)

    const selectUser = 'SELECT * FROM user WHERE email = ? AND password = ?'
    const updateUser = 'UPDATE user SET password = ?, photo = ? WHERE email = ?'

    connection.query(selectUser, [email, password], function (err, rows) {
        if (err) throw err

        if (rows.length === 1) {

            console.log('selected: ')
            console.log(rows[0])
            const user = rows[0];

            connection.query(updateUser, [newPassword, photo, email], function (err, rows) {
                if (err) throw err
                if (rows) {
                    console.log('update successful:')
                    console.log(rows)

                    // user.password = newPassword;
                    delete user.password;
                    user.photo = photo;
                    user.email = email;

                    res.status(200).json({flag : 1, message : "변경이 완료되었습니다."});
                }
            })
        } else {
            console.log('wrong id, pw')
            res.status(200).json({flag : 0, message : "패스워드가 틀렸습니다."})
        }
    })
})

module.exports = router