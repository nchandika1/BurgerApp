/*
 * Contains all the Client Side Javascript code.
 * Handles all the Click functions for the Burgers app
*/

$(function() {
	// On Click function for Create button
	// Create a new burger
	$("#create").on("click", function() {

		event.preventDefault();
		var burgerName = {
			name: $("#burger").val().trim()
		};

		// AJAX call to create new burger in the database
		$.ajax("/index", {
			type: "POST",
			data: burgerName
		}).then(function() {
			location.reload();
		});
	});
	
	// On Click function for Devour It button
	// Update burger's 'devoured' property
	$(".devour").on("click", function() {

		event.preventDefault();
		var routeStr ="/index/" + $(this).data("id");
		var devoured = false;
		if ($(this).data("devour") == "0") {
			devoured = true;
		}

		var dataObj = {
			devoured: devoured
		};

		// AJAX call to update "devoured" property of the burger
		$.ajax(routeStr, {
			type: "PUT",
			data: dataObj
		}).then(function() {
			location.reload();
		});

	});
});