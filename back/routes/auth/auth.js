const express = require('express');
const router = express.Router();

const connection = require('../../helpers/db');
const table = 'users';

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/signup', (req, res, next) => {
  const user  = req.body;
  connection.query(`INSERT INTO ${table} SET ?`, user, (error, results, fields) => {
    if(error){
      res.status(500).json({ flash:  error.message });
    }
    else{
      res.status(200).json({ flash:  "User has been signed up !" });
    }
  });
});

module.exports = router;