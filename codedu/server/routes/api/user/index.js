const express = require('express')
const router = express.Router()
const path = require('path')

const mysqlConfig = require(path.resolve(__dirname, '../../../../config/mysql_config'))
const mysql = require('mysql')
const connection = mysql.createConnection(mysqlConfig)
connection.connect()

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser(function(user, done) {
  done(null, user.email)
})

passport.deserializeUser(function(email, done) {
  done(null, email)
})
router.get('/', function(req, res) {
  res.send("router user")
})

passport.use('local-login', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true
}, function(req, email, password, done) {
  console.log('local-login callback called')
  const query = connection.query('select email, password from user where email = ?', [email], function(err, rows) {
    console.log('query')
    if(err) return done(err)
    if(!rows.length) {
      console.log("email")
      return done(null, false, {message : 'Login Fail Email'})
    } else {
      if(rows[0].password !== password) {
        console.log("password")
        return done(null, false, {message : 'Login Fail Password'})
      } else {
        console.log(rows[0])
        return done(null, {email : email})
      }
    }
  })
}))

router.post('/', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    console.log('authenticate')
    if(err) res.json(err)
    if(!user) return res.json(info.message)

    req.logIn(user, function(err) {
      if(err) return next(err)
      console.log(user)
      return res.json({isLogin: true, message: "Succese", userName: user.email})
    })
  })(req, res, next);
})

module.exports = router