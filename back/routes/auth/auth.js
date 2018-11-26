var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res, next) {
  res.send('I am in POST signup');
});

module.exports = router;