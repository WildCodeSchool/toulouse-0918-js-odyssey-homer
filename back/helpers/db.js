const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : 'odyssee'
});
module.exports  =  connection;