const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Lemans72',
  database : 'odyssee'
});
module.exports  =  connection;