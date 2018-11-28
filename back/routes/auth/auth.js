const express = require('express');
const router = express.Router();
const db = require('../../helpers/db');

router.post('/signup', (req, res) => {
    const user = [req.body.email, req.body.password, req.body.name, req.body.lastname];
    db.query('INSERT INTO users(email, password, name, lastname) VALUES (?, ?, ?, ?)', user, (err) => {
      if (err){
        res.status(500).json({ flash:  err.message });
      }
      else {
        res.status(200).json({ flash:  "User has been signed up !" });
      }
    })
});

module.exports = router;

