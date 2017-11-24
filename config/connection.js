/*
 * Set up code for MYSQL database that hosts burgers_db for this app
*/

// Dependencies
var mysql = require("mysql");
var connection;

// Create connection parameters so that it is also deployed on HEROKU
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "127.0.0.1",
		user: "root",
		password: "",
		database: "burgers_db"
	});
};

// Connection to the burgers_db
connection.connect(function(err) {
	if (err) throw err;
	console.log("DB Connected ID: " + connection.threadId);
});

module.exports = connection;