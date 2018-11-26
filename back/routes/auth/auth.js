const  express  =  require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("youhou");
})

router.post('/signup', function(req, res, next) {
  res.send('I am in POST signup');
});

module.exports = router;
