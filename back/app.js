// je déclare l'ensemble des librairies nécessaires
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
const  authRouter = require('./routes/auth/auth');

// je configure l'application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

// j'implémente la partie API
app.get("/", (req,res) => {
  res.send("youhou");
})
/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use('/auth', authRouter); //où authRouter est issu de l'importation

app.use(function(req, res, next) {
  var  err  =  new  Error('Not Found');
  err.status  =  404;
  next(err);
});

//je lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  3000, function(){
  console.log('Listening on port '  +  server.address().port);
});