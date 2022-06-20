var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var _ = require('underscore');

router.get('/', function(req, res, next) {
    res.render('frontpage')
  });

  router.post('/add', function(req, res, next) {
    var a=parseInt(req.body.num1);
    var b=parseInt(req.body.num2);
    var c=a+b;
    res.render('frontpage',{c});

  });
  router.post('/multi', function(req, res, next) {
    var a=parseInt(req.body.num1);
    var b=parseInt(req.body.num2);
    var c=a*b;
    res.render('frontpage',{c});
  });
  router.post('/sub', function(req, res, next) {
    var a=parseInt(req.body.num1);
    var b=parseInt(req.body.num2);
    var c=a-b;
    res.render('frontpage',{c});
  });

  
  module.exports = router;