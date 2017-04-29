const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')


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
/********** */


const route = require('./routes/index')

app.use('/', express.static(path.resolve(__dirname, '../build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(4000, function() {
  console.log('Server Start Port Number : 4000')
})

app.use(route)