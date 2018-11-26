const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maitetxu',
  database : 'odyssey_homer'
});
module.exports  =  connection;