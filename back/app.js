// Ensemble des librairies nécessaires
const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
const authRouter = require('./routes/auth/auth.js')

// Configuration de l'application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));
app.use('/auth', authRouter);

// Partie API
app.get("/", (req,res) => {
    res.send("youhou");
})

/// Si route non trouvée => retourne le code 404 'Not Found'
app.use(function(req, res, next) {
    const  err  =  new  Error('Not Found');
    err.status  =  404;
    next(err);
});

//Lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  3001, function(){
    console.log('Listening on port '  +  server.address().port);
});
