const mysql      = require('mysql');
const settings = require('../settings')
const connection = mysql.createConnection(settings.db);
module.exports  =  connection;