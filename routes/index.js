var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "data_sr"
});

router.get('/', function(req, res, next) {
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected to mySQL!");
      });
    res.render('index')
});

router.post('/about', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `data` (`fname`, `lname`) \
    VALUES ('"+req.body.fname+"', '"+req.body.lname+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
      // var sql1 = "select * from `qqq`"
      // con.query(sql1, function (err, result) {
      //   if (err) throw err;
      //   console.log(result);
      // });
res.json({"Name":req.body})
});
router.get('/data', function(req, res, next) {
  console.log(req.query)
  var sql = "INSERT INTO `k` (`name`, `college`) \
  VALUES ('"+req.query.name+"', '"+req.query.college+"');"
  console.log(sql)
 con.connect()
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);

    });
    // var sql1 = "select * from `qqq`"
    // con.query(sql1, function (err, result) {
    //   if (err) throw err;
    //   console.log(result);
    // });
res.json({"Name":req.query})
});

module.exports = router;