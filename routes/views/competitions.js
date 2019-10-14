var Keystone = require("keystone");
var Winner = Keystone.list("Winner");

exports = module.exports = function(req, res) {
	var view = new Keystone.View(req, res);
	var locals = res.locals;

	locals.section = "competitions";
	locals.pageTitle = "Competitions";

	view.query("winners", Winner.model.find().sort("-year"));
	view.render("competitions");
};