const express = require('express');
const connection = require('../../helpers/db.js');
const router = express.Router();

router.post('/signup', (req, res, next) => {
  const post = [req.body.email, req.body.password, req.body.name, req.body.lastname]
  const query = connection.query(`INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`, post, function (error, results, fields) {
    if(error) {
      res.status(500).json({ flash:  error.message });
    } else {
      res.status(200).json({ flash:  "User has been signed up !" });
    }
      });
  });

module.exports = router;
