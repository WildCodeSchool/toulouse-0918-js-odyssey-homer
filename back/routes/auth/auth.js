const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db')

router.post('/signup', function (req, res, next) {
  const post = [req.body.email, req.body.password, req.body.name, req.body.lastname]
  connection.query('INSERT INTO users(email, password, name, lastname) VALUES(?, ?, ?, ?)', post, function (error, results, fields) {
    if (error)
      res.status(500).json({ flash: error.message });
    else
      res.status(200).json({ flash: "User has been signed up !" });
  });
});

router.post('/signin', function (req, res, next) {
  const post = [req.body.email, req.body.password]
  connection.query('INSERT INTO users(email, password) VALUES(?, ?, ?, ?)', post, function (error, results, fields) {
    if (error)
      res.status(500).json({ flash: error.message });
    else
      res.status(200).json({ flash: "User has been signed up !" });
  });
});

module.exports = router;