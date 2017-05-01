const express = require('express')
const router = express.Router()

const user = require('./user/index')
const userinfo = require('./userinfo/index')
const join = require('./join/index')
const logout = require('./logout/index')

router.use('/user', user)
router.use('/userinfo', userinfo)
router.use('/join', join)
router.use('/logout', logout)

module.exports = router