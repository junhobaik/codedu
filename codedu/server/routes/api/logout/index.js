const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  console.log('logout')
  console.log(req.user)
  req.logout()
  console.log(req.user)
  res.json('logout')
})

module.exports = router