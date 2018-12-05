const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');

router.post('/signup', (req, res) => {
  const { email, password, name, lastname } = req.body;
  connection.query(
    `INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`,
    [email, password, name, lastname],
    err => {
      if (err)
        res.status(500).json({ flash:  err.message });
      else
        res.status(200).json({ flash:  "User has been signed up !" });
	});
});

module.exports = router;