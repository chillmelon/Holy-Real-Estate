var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/map', function (req, res, next) {
    res.render('map/map');
});

module.exports = router;
