const express = require('express');
const router = express.Router();

const connection = require('../../helpers/db');
const table = 'users';

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/signup', (req, res, next) => {
  const post  = req.body;
  connection.query(`INSERT INTO ${table} SET ?`, post, (error, results, fields) => {
    if (error) res.status(500).end();
  });
  res.send(`user ${post.name} has been added.`);
});

module.exports = router;