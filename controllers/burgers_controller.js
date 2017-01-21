var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){

	burger.all(function(burgers){

		var handlebarObject = {
			burgers: burgers

		};
		console.log(burgers);
		res.render("index", handlebarObject);
	});

});

router.post("/", function(req, res) {
	console.dir(req.body);
	console.log(req.body.name);
  burger.create("burger_name", req.body.burger_name, function() {
    res.redirect("/");
    
  });
});

router.put("/:id", function(req, res) {
  var state = "id = " + req.params.id;

  console.log("state", state);

  burger.update({devoured: req.body.devoured}, state, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});


module.exports = router;