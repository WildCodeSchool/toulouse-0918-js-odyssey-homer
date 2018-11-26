const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db')

router.post('/signup', function (req, res, next) {
  const post = req.body;
  connection.query('INSERT INTO users SET ?', post, function (error, results, fields) {
    if (error) {
      res.status(500).end()
    }
    else {
      res.end();
    }
  });
});

module.exports = router;