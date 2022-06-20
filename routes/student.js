var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.json({name:"srishti_24"})
});
router.get('/data', function(req, res, next) {
  res.json({name:req.query.fname,lname:req.query.lname})
});
router.get('/loginID', function(req, res, next) {
  console.log(req);
  res.render("loginID")
});
router.post('/about', function(req, res, next) {
  res.json({name:req.body.fname,lname:req.body.lname})
});

router.post('/front', function(req, res, next) {
  res.json({name:req.body.num1,lname:req.body.num2})
});
 router.get('/:da-:ta', function(req, res, next) {
   console.log(req.params);
   res.json({name:req.params.da + req.params.ta+"="+req.params.da+req.params.ta});
 });
// router.get('/:da', function(req, res, next) {
//   console.log(req.params.da);
//   res.json({name:req.params.da});
// });
// router.get('/:ta', function(req, res, next) {
//   console.log(req.params.ta);
//   res.json({name:req.params.ta});
// });

module.exports = router;
