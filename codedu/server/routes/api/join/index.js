const express = require('express')
const router = express.Router()
const app = express()
const path = require('path')

const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const flash = require('connect-flash')

//MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'bjh0324',
  database: 'codedu'
});
connection.connect(function (err) {
  if (err) {
    console.log("! mysql connection error");
    console.log(err);
    throw err;
  } else {
    console.log("* mysql connection success");
  }
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

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
}))

router.post('/', function (req, res, next) {
    const data = req.body
    console.log("data=", data);
    if (data.email === '' || data.password === '' || data.vpassword === '') {
      res.json({
        'message': "입력되지 않은 값이 있습니다"
      });
    } else {
      var query = connection.query('select * from user where email=?', [data.email], function (err, rows) {
        if (err) throw err;
        else if (rows.length) {
          res.json({
            'message': "이미 가입된 이메일입니다"
          });
        } else if (data.password !== data.vpassword) {
          res.json({
            'message': "패스워드 확인이 틀립니다"
          })
        } else {
          next();
        }
      })
    }
  },
  passport.authenticate('local-join', {
    successRedirect: '/main', //성공시 리다이렉트
    failureRedirect: '/', //실패시 리다이렉트
    failureFlash: true
  }))
/****************************************/


module.exports = router