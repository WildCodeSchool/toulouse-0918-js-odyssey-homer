const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'brubru31300',
  database : 'odysse'
});
module.exports  =  connection;