/*
 * Contains all routes on the Server side.  In this App, get, post and put are used. 
 */

// Dependencies
var express = require("express");
var burger = require("../models/burger.js");

// Routes for the Burger App
var router = express.Router();

router.get("/", function(req, res) {
	console.log("GET all burgers!");
	burger.all(function(data) {
		var burgerObj = {
			burgers: data
		};		
		res.render('index', burgerObj);
	});
});

router.get("/index", function(req, res) {
	console.log("GET all burgers!");
	burger.all(function(data) {
		var burgerObj = {
			burgers: data
		};		
		res.render('index', burgerObj);
	});
});

router.post("/index", function(req, res) {
	console.log("ADD a burger!");
	var colArray = ["burger_name"];
	var valArray = [req.body.name];
	burger.create(colArray, valArray, function(data) {
		res.json({id: data.resultId});
	});
});

router.put("/index/:id", function(req, res) {
	console.log("UPDATE burger with id: " + req.params.id, req.body.devoured);
	burger.update(req.params.id, req.body.devoured, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Make the routes avaiable to external users
module.exports = router;