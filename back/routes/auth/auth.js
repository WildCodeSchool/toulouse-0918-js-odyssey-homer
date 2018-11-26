let express = require('express')
let router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/signup', function(req, res, next) {
  res.send('I am in POST signup');
});

module.exports = router;
