const express = require('express');
const router = express.Router();
const db = require('../../helpers/db');

router.post('/signup', (req, res) => {
    const user = req.body;
    db.query('INSERT INTO users SET ?', user, (err, res, fields) => {
      if (err) throw err
    })
    res.sendStatus(200);
  });

module.exports = router;

