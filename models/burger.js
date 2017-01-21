
var orm = require("../config/orm.js");

var burger = {

	all: function(callBack) {

		orm.all("burgers", function(burgers){
		callBack(burgers);

		});
	},

	create: function(cols,vals, callBack) {
    orm.create("burgers", cols, vals, function(res) {
      callBack(res);
    });
  }, 

  	update: function(objColVals, state, callBack) {

  	orm.update("burgers",objColVals, state, function(res) {

  		callBack(res);

  	});

  	}

};

module.exports = burger;