$(function() {
	// On Click function for create button
	// Create a new burger
	$("#create").on("click", function() {

		event.preventDefault();
		var burgerName = {
			name: $("#burger").val().trim()
		};

		// AJAX call to send data to the Server to create a new burger
		$.ajax("/index", {
			type: "POST",
			data: burgerName
		}).then(function() {
			location.reload();
		});
	});
	
	$(".devour").on("click", function() {

		event.preventDefault();
		var routeStr ="/index/" + $(this).data("id");
		var devoured = false;
		if ($(this).data("devoured") == "false") {
			devoured = true;
		}
		// Update the data attrbute to changed value;
		// $(this).data(devoured);

		console.log(devoured);
		console.log(routeStr);

		var dataObj = {
			devoured: devoured
		};

		console.log(dataObj);
		$.ajax(routeStr, {
			type: "PUT",
			data: dataObj
		}).then(function() {
			location.reload();
		});

	});
});