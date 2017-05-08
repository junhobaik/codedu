const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

/* mongoose */
const mongoose = require('mongoose')

const db = mongoose.connection
db.on('error', console.error)
db.once('open', function() {
  console.log('Connected to mongod server')
})

mongoose.connect('mongodb://localhost/codedu_quiz')

/**********passport */
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')
var flash = require('connect-flash')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

passport.serializeUser(function (user, done) {
  console.log('passport session save : ', user.email)
  done(null, user.email)
});

passport.deserializeUser(function (email, done) {
  console.log('passport session get id: ', email)
  done(null, email);
})
/********** */


const route = require('./routes/index')

app.use('/', express.static(path.resolve(__dirname, '../build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(4000, function() {
  console.log('Server Start Port Number : 4000')
})

app.use(route)

