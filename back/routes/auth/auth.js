const express = require('express');
const router  =  express.Router();
const db = require('../../helpers/db')

router.post('/signup', (req, res) => {
  db.query('INSERT INTO users SET ?', req.body, (error, res, fields) => {
    if(error) throw error;
  });
  res.sendStatus(200);
});

module.exports = router;
