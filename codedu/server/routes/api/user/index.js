const express = require('express')
const router = express.Router()
const path = require('path')

const mysqlConfig = require(path.resolve(__dirname, '../../../../config/mysql_config'))
const mysql = require('mysql')
const connection = mysql.createConnection(mysqlConfig)
connection.connect()

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

router.get('/', function(req, res) {
  res.send("router user")
})

passport.use('local-login', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true
}, function(req, email, password, done) {
  console.log('local-login callback called')
  const query = connection.query('select email, password, photo from user where email = ?', [email], function(err, rows) {
    console.log('query')
    if(err) return done(err)
    if(!rows.length) {
      console.log("email")
      return done(null, false, {message : '이메일, 비밀번호가 일치하지 않습니다.'})
    } else {
      if(rows[0].password !== password) {
        console.log("password")
        return done(null, false, {message : '이메일, 비밀번호가 일치하지 않습니다.'})
      } else {
        console.log(rows[0])
        return done(null, {email : email}, {photo: rows[0].photo})
      }
    }
  })
}))

router.post('/', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    console.log('authenticate')
    if(err) res.json(err)
    if(!user) return res.json({isLogin: false, message: info.message})

    req.logIn(user, function(err) {
      if(err) return next(err)
      console.log("req.logIn", req.user)
      return res.json({isLogin: true, message: "Succese", userName: user.email, photo: info.photo})
    })
  })(req, res, next);
})

module.exports = router