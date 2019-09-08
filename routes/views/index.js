var keystone = require("keystone");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//Set page specific locals
	locals.section = "home";
	locals.pageTitle = "Home Page";

	//Render the page
	view.render("index");
};