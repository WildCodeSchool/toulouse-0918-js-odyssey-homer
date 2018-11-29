const express = require('express');

const router = express.Router();
const connection = require('../../helpers/db');

router.post('/signup', (req, res, next) => {
  // const post = [req.body.email, req.body.password, req.body.name, req.body.lastname];
  connection.query('INSERT INTO users SET ?', req.body, (error, results, fields) => {
    if (error) console.log(error);
    res.send('ok');
  });
});

module.exports = router;
