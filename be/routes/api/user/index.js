var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send({msg:'hello', a:1})
});

router.get('/q', function(req, res, next){
  res.send({msg:'QUESTION?', a:2})
})

router.all("*", function(req, res, next){
  next(createError(404, 'API를 찾을 수 없습니다.'));
})

module.exports = router;
