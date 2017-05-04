const express = require('express')
const router = express.Router()

const user = require('./user/index')
const userinfo = require('./userinfo/index')
const join = require('./join/index')
const logout = require('./logout/index')
const study = require('./study/index')

const Book = require('../../../model/book')

router.use('/user', user)
router.use('/userinfo', userinfo)
router.use('/join', join)
router.use('/logout', logout)
router.use('/study', study)

// router.get('/books', function(req, res) {
//   console.log('api/books')

//   Book.find(function(err, books) {
//     res.json(books)
//   })
// })

module.exports = router