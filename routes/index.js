var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var _ = require('underscore');

// var con = mysql.createConnection({
//   host: "easylearning.guru",
//   user: "kcc_student",
//   password: "Kccitm.edu.in1",
//   database: "kccStudent"
// });

router.get('/', function(req, res, next) {
  res.render('index')
});

// router.get('/', function(req, res, next) {
   
//     con.connect(function(err) {
//         if (err) console.log("err");
//         console.log("Con1.392nected!");
//       });

//     res.render('index')
// });

// router.get('/getClass', function(req, res, next) {
//     console.log(req.query)
// res.json({"Name":req})
// });
router.post('/about', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `srishti` (`fname`, `lname`) \
    VALUES ('"+req.body.fname+"', '"+req.body.lname+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log(result);
        res.json({"Name":result})

      });
     

});
router.get('/read', function (req, res) {
  con.connect(function(err) {
    // if (err) throw err;
    con.query("SELECT * FROM srishti", function (err, result, fields) {
      // if (err) throw err;
      console.log(result);
      res.json({"Name":result})
    });
  });
});


router.get('/function', function (req, res) {
  console.log(_.max([1,2,3])
  )
});
    


// router.get('/loginID', function(req, res, next) {
//   console.log(req);
//   res.render("loginID")
// });
   


module.exports = router;

// router.all('/getPost', function(req, res, next) {
//     console.log(req.body)
//     if(req.body){
//         //do something
//     }else{
//         //do something else
//     }
//     console.log(req.body.pass)
// res.json({"Name":req.body})
// }