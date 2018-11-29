const mysql = require('mysql');
const settings = require('../settings');
const connection = mysql.createConnection(settings);
module.exports = connection;