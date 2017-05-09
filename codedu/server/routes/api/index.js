const express = require('express')
const router = express.Router()

const user = require('./user/index')
const userinfo = require('./userinfo/index')
const join = require('./join/index')
const logout = require('./logout/index')
const study = require('./study/index')
const quiz = require('./quiz/index')

router.use('/user', user)
router.use('/userinfo', userinfo)
router.use('/join', join)
router.use('/logout', logout)
router.use('/study', study)
router.use('/quiz', quiz)

module.exports = router