const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');


router.get("/", (req, res) => {
  res.send("youhou");
})

router.post('/signup', function (req, res, next) {

  // req.body = {
  //   email: "best@adresse.kum",
  //   password: "thisPWsuxx",
  //   name: "Regis",
  //   lastname: "Robert"
  // }
  connection.query(
    `INSERT INTO users (email, password, name, lastname) VALUES ('${req.body.email}', '${req.body.password}', '${req.body.name}', '${req.body.lastname}')`,
    (error, results) => {
      if (error)
        res.status(500).json({ flash: error.message });
      else
        res.status(200).json({ flash: "User has been signed up !" });
    })
});

module.exports = router;
