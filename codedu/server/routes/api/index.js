const express = require('express')
const router = express.Router()

const user = require('./user/index')
const userinfo = require('./userinfo/index')
const join = require('./join/index')

router.use('/user', user)
router.use('/userinfo', userinfo)
router.use('/join', join)

module.exports = router