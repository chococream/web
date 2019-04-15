var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const us = [
    {
      name: "테스트1",
      age: 15
    },
    {
      name:"테스트2",
      age:24
    }
]
  res.send({ users: us })
})
router.post('/', function(req, res, next) {
  console.log(req.qurey)
  console.log(req.body)
  res.send({success:true, msg:'post ok'})
})
router.put('/', function(req, res, next) {
  console.log(req.qurey)
  console.log(req.body)
  res.send({success:true, msg:'post ok'})
})
router.delete('/', function(req, res, next) {
  console.log(req.qurey)
  console.log(req.body)
  res.send({success:true, msg:'post ok'})
})





module.exports = router;
