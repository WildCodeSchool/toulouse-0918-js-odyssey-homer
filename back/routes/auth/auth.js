const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const db = require('../../helpers/db');

router.post('/signup', (req, res) => {
    const user = req.body;
    db.query('INSERT INTO users SET ?', user, (err, res, fields) => {
      if (err) throw err
    })
    res.sendStatus(200);
  });

module.exports = router;

=======

router.post('/signup', function(req, res, next) {
    res.send('I am in POST signup');
});

module.exports = router;


>>>>>>> e698f5de11cd6877e85ca30ece20d6d23afb686e
