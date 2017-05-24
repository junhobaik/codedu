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
  const data = req.body
  Lecture.update({_id:data._id}, data, function(err, part) {
    if(err) throw err
    console.log(part)
    res.json(part)
  })
})

module.exports = router