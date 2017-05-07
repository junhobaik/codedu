const express = require('express')
const router = express.Router()

const user = require('./user/index')
const userinfo = require('./userinfo/index')
const join = require('./join/index')
const logout = require('./logout/index')
const userstats = require('./userstats/index')

router.use('/user', user)
router.use('/userinfo', userinfo)
router.use('/userstats', userstats)
router.use('/join', join)
router.use('/logout', logout)

module.exports = router