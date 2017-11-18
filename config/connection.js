/*
 * Set up code for MYSQL database that hosts burgers_db for this app
*/

// Dependencies
var mysql = require("mysql");

// Create connection parameters
var connection = mysql.createConnection({
	port: 3306,
	host: "127.0.0.1",
	user: "root",
	password: "",
	database: "burgers_db"
});

// Connection to the burgers_db
connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected ID: " + connection.threadId);
});

module.exports = connection;