const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'azerty',
  database : 'sqlquests'
});
module.exports  =  connection;