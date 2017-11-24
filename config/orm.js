/*
 * BASIC ORM functions
*/

// Dependencies: Make sure we have connection to the database
var connection = require("./connection.js");

// Utility functions
var colToString = function (cols) {
	var colString = '(';
	for (var i=0; i<cols.length-1; i++) {
		colString += cols[i];
		colString += ',';
	}
	colString += cols[cols.length-1];
	colString += ')';
	return colString;
};
var valToString = function (vals) {
	var valString = '(';
	for (var i=0; i<vals.length-1; i++) {
		valString += vals[i];
		valString += ',';
	}
	valString += "\"";
	valString += vals[vals.length-1];
	valString += "\"";
	valString += ')';
	return valString;
};

// Define functions to perform various database operations
var orm = {
	// GET All query to the database
	all: function(tableID, cb) {
		var queryString = "SELECT * FROM " + tableID;
		connection.query(queryString, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},

	// Add a new entry into the database
	create: function(tableID, cols, vals, cb) {
		var queryString = "INSERT INTO " + tableID + " ";
		queryString += colToString(cols);
		queryString += " VALUES ";
		queryString += valToString(vals);
		connection.query(queryString, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},

	// Update a given field in the database
	update: function(tableID, cols, condition, cb) {
		var queryString = "UPDATE " + tableID + " SET " + cols[0];
		queryString += " WHERE " + condition;
		connection.query(queryString, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	}	
};

module.exports = orm;
