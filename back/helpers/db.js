const  mysql = require('mysql');
	const  connection = mysql.createConnection({
	host :  'localhost', // adresse du serveur
	user :  'root', // le nom d'utilisateur - A CONFIGURER
	password :  'lilalila', // le mot de passe - A CONFIGURER
	database :  'sqlquests', // le nom de la base de données - A CONFIGURER
	});
	module.exports = connection;