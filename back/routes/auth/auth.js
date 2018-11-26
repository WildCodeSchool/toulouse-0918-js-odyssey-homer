const express = require('express');
const router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

router.post('/signup', (req, res, next) => {
  res.send('I am in POST signup');
});

module.exports = router;