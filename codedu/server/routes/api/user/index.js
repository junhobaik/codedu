const express = require('express')
const router = express.Router()

const mysqlConfig = require('../../../../config/mysql_config')

const mysql = require('mysql')
const connection = mysql.createConnection(mysqlConfig)

router.get('/', function(req, res) {
  res.send("router user")
})

router.post('/', function(req, res) {
  const id = "test@test.com"
  const pass= "test1234"

  const {email, password} = req.body
  console.log(req.body)
  console.log(email, password)

  if(email !== id) {
    return res.json({isLogin: false, message: "아이디나 비밀번호가 다릅니다."})
  } else if(pass !== password) {
    return res.json({isLogin: false, message: "아이디나 비밀번호가 다릅니다"})
  } else {
    return res.json({isLogin: true, message: "로그인 성공", userName: email})
  }
})

module.exports = router