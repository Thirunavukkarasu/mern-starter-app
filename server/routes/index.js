var express = require('express');
var router = express.Router();

/* GET frameworks. */
router.get('/frameworks', function(req, res, next) {
  res.json([{
    name : 'Angular'
  },{
    name : 'React'
  },{
    name : 'Vue'
  }])
});

module.exports = router;
