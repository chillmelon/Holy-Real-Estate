var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home/index');
});

router.get('/graph', function (req, res, next) {
  res.render('home/graphpage');
});

module.exports = router;
