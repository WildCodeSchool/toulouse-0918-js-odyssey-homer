let express = require('express');
let router = express.Router();
const connection = require('../../helpers/db.js');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/signup', function (req, res, next) {
  // récupération des données envoyées
  const formData = req.body;
  const post = [req.body.email, req.body.password, req.body.name, req.body.lastname];
  // console.log({formData});

  // connection à la base de données, et insertion du user
  connection.query('INSERT INTO users(email,password,name,lastname) VALUES(?,?,?,?)', post, (err, results) => {

    if (err)
      res.status(500).json({ flash: err.message });
    else
      res.status(200).json({ flash: "User has been signed up !" });
  });

  // res.send('I am in POST signup');
});

module.exports = router;