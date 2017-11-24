// Dependencies
var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
	    orm.all("burgers", function(res) {
	    	cb(res);
    	});
  	},
	// The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
  	orm.create("burgers", cols, vals, function(res) {
    		cb(res);
  	});
	},
	update: function(id, devoured, cb) {
    var conditionStr = "id="+id;
    var cols = new Array("devoured="+devoured);
  	orm.update("burgers", cols, conditionStr, function(res) {
    		cb(res);
  	});
	}
};

module.exports = burger;
