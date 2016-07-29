var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

connection.connect(function (err){
	if(err) {
		console.log("Connection error:" + err.stack);
		return;
	}

	console.log('Connected as id:' + connection.thredId);

 });

module.exports = connection;