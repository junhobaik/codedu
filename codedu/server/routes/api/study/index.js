const express = require('express')
const router = express.Router()
const Part = require('../../../../model/part')
const mongoose = require('mongoose');

router.get('/:quiz', function(req, res) {
  //param is "javascript Basic of Basic-First Step"
  const reqParam = req.params.quiz.split("-");

  Part.find({$and:[{part_title:reqParam[0]},{quiz:{$elemMatch:{quiz_title:reqParam[1]}}}]}, function(err, part) {
    if(err) return console.error(err)
    for(v of part[0].quiz){
      if(v.quiz_title == reqParam[1]) {
        console.log("res.json is",v);
        res.json(v)
      }
    }
  })
})

module.exports = router