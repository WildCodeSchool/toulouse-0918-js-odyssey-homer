const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');

router.post('/signup', (req, res) => {
  const { email, password, name, lastname } = req.body;
  connection.query(
    `INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`,
    [email, password, name, lastname],
    err => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } 
      else {
      res.end();
    }
	});
});

module.exports = router;