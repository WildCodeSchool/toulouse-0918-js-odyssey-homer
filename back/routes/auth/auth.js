let express = require('express')
let router = express.Router();
const connection = require('../../helpers/db');

/*  
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
 */

router.post('/signup', function(req, res, next) {
  const post  = req.body;
  const query = connection.query('INSERT INTO users SET ?', post, function 
  (error, results, fields) {
    if (error)
    res.status(500).json({ flash:  error.message });
else
    res.status(200).json({ flash:  "User has been signed up !" });
  })
});

module.exports = router;
