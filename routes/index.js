var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index')
})

router.get('/teresa', function(req, res) {
    res.render('teresa')
})

router.get('/letter', function(req, res) {
    res.render('letter')
})

module.exports = router;