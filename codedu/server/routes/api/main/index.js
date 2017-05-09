const express = require('express');
const router = express.Router();
const Part = require('../../../../model/part');
const mongoose = require('mongoose');

router.get('/:user', function(req, res) {
    Part.find({},function(err, part){
        if(err) throw err;
        console.log(part);
        res.json(part);
    })
})

module.exports = router