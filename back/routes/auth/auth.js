const express = require('express');
const router = express.Router();

const connection = require('../../helpers/db');
const table = 'users';

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/signup', (req, res, next) => {
  const { firstname, lastname, email, password }  = req.body;
  const data = {
    name: firstname,
    lastname,
    email,
    password
  };
  console.log(data);

  connection.query(`INSERT INTO ${table} SET ?`, data, (error, results, fields) => {
    if(error){
      res.status(500).json({ flash:  error.message });
    }
    else{
      res.status(200).json({ flash:  "User has been signed up !" });
    }
  });
});

module.exports = router;