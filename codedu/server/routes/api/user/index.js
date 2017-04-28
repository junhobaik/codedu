const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.send("router user")
})

module.exports = router