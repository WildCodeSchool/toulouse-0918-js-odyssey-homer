const express = require('express');

const router = express.Router();
const connection = require('../../helpers/db');

router.post('/signup', (req, res, next) => {
  const { email, password, name, surname: lastname } = req.body;
  const data = { email, password, name, lastname };
  connection.query('INSERT INTO users SET ?', data, (error, results, fields) => {
    console.log(error);
    if (error)
      res.status(500).json({ flash: error.message });
    else
      res.status(200).json({ flash: "User has been signed up !" });
  });
});

module.exports = router;
