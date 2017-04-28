const express = require('express')
const router = express.Router()
const path = require('path')

router.get('*', function(req, res, next) {
  if(req.path.replace('/')[1] === 'static') return next()

  res.sendFile(path.resolve(__dirname, '../../build/index.html'))
})

module.exports = router