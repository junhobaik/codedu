const express = require('express')
const router = express.Router()
const Lecture = require('../../../../model/lecture')

router.get('/', function(req, res) {
  Lecture.find({}, function(err, part) {
    if(err) throw err
    console.log(part)
    res.json(part[0])
  })
})

router.post('/', function(req, res) {
  console.log("req.body = ", req.body)
  res.json({message: "ok"})
})

module.exports = router