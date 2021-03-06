/*
 * BURGER (VEGETARIAN) APP. SERVER ALLOWS USER TO ADD AND DEVOUR VARIOUS KINDS OF 
 * VEGETATRIAN BURGERS.  DATA IS PERSISTENT AND IS STORED IN MYSQL DATABASE.
*/

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;  // Port to listen to

var app = express();  // Get express handle

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up routes for the app
var routes = require("./controllers/burgersController.js");
app.use("/", routes);

//Start listening
app.listen(PORT, function(error) {
	if (error) throw error;
	console.log("Listening on port: " + PORT);
});