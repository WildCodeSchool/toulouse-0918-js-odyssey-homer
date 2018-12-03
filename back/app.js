const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authRouter = require('./routes/auth/auth');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Youhou ! Des donuts !');
});

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Listening on port' + server.address().port);
});
