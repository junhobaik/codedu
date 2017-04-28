const express = require('express')
const router = express.Router()

const user = require('./user/index')
const join = require('./join/index')

router.use('/user', user)
router.use('/join', join)

module.exports = router