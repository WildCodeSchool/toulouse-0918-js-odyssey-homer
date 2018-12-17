let express = require('express')
let router = express.Router();
const connection = require('../../helpers/db');
const { check, validationResult } = require('express-validator/check');

// route vers signUp
router.post('/signup',
  [check('psw').not().isEmpty()],
  function(req, res) {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).json({ flash: "You are something wrong" });
    }
  const last  = req.body;
  const query = connection.query('INSERT INTO users SET ?', 
  last, function 
  (error, results, fields) {
    if (error)
      res.status(500).json({ flash:  "You are already registered ! Please, connect you" });
    else
      res.status(200).json({ flash:  "User has been signed up !" });
  })
});

module.exports = router;
