var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.json({name:"srishti_24"})
});
 router.get('/:da-:ta', function(req, res, next) {
   console.log(req.params.da);
   res.json({name:req.params.da+req.params.ta});
 });
router.get('/:da', function(req, res, next) {
  console.log(req.params.da);
  res.json({name:req.params.da});
});
router.get('/:ta', function(req, res, next) {
  console.log(req.params.ta);
  res.json({name:req.params.ta});
});

module.exports = router;
