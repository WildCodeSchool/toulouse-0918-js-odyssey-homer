const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '$Grovestreet4$',
  database : 'sqlquests'
});
module.exports  =  connection;
