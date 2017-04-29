const express = require('express')
const router = express.Router()
const app = express()
const path = require('path')


const passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

//MySQL
const mysqlConfig = require(path.resolve(__dirname, '../../../../config/mysql_config'))
var mysql = require('mysql');
var connection = mysql.createConnection(mysqlConfig);
connection.connect(function (err) {
  if (err) {
    console.log("! mysql connection error");
    console.log(err);
    throw err;
  } else {
    console.log("* mysql connection success");
  }
});

/******************join******************/
passport.serializeUser(function (user, done) {
  console.log('passport session save : ', user.id)
  done(null, user.id)
});

passport.deserializeUser(function (id, done) {
  console.log('passport session get id: ', id)
  done(null, id);
})


passport.use('local-join', new LocalStrategy({
  usernameField: 'email', 
  passwordField: 'password', 
  passReqToCallback: true 
}, function (req, email, password, done) {
  console.log('local-join callback called');
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
}))

router.post('/', function(req, res, next) {
  const temp = req.body
  console.log(temp)
  next()
},
  passport.authenticate('local-join', {
  successRedirect: '/main', //성공시 리다이렉트
  failureRedirect: '/fail', //실패시 리다이렉트
  failureFlash: true
}))
/****************************************/


module.exports = router

