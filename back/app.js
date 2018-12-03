
//DECLARATION
const  http = require('http');
const  path = require('path');
const  express = require('express');
const  bodyParser = require('body-parser');
const  morgan = require('morgan');
const  app = express();
const authRouter = require('./routes/auth/auth')

//CONFIGURATION
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));
app.use('/auth', authRouter);

//FONCTIONNEL
app.get("/", (req,res) => {
    res.send("youhou");
});
app.use(function(req, res, next) {
    var  err = new  Error('Not Found');
    err.status = 404;
    next(err);
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Listening on port' + server.address().port);
});
