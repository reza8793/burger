
var orm = require("../config/orm.js");

var burger = {

	all: function(callBack) {

		orm.all("burgers", function(burgers){

			callBack(burgers);

		});
	}

};

module.exports = burger;