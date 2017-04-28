const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const route = require('./routes/index')

app.use('/', express.static(path.resolve(__dirname, '../build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(4000, function() {
  console.log('Server Start Port Number : 4000')
})

app.use(route)