var Keystone = require("keystone");
var UK = Keystone.list("BestSommelierUkWinner");
var Asi = Keystone.list("AsiChampion");
var AsiaOceana = Keystone.list("AsiaOceanaWinner");
var Europe = Keystone.list("EuropeWinner");
var Americas = Keystone.list("AmericasWinner");
var World = Keystone.list("WorldWinner");

exports = module.exports = function(req, res) {
	var view = new Keystone.View(req, res);
	var locals = res.locals;

	//Add page properties to locals
	locals.section = "competitions";
	locals.pageTitle = "Competitions";

	//Called whenever the page requested
	locals.winnerCount = [];

	view.query("best_sommelier_uk", UK.model.find().sort("-year"));
	view.query("asi_certificate", Asi.model.find().sort("-year -vintage.listpriority"));
	view.query("asia_oceana", AsiaOceana.model.find().sort("-year"));
	view.query("europe", Europe.model.find().sort("-year"));
	view.query("americas", Americas.model.find().sort("-year"));
	view.query("world", World.model.find().sort("-year"));

	view.render("competitions"); //Render the template into html
};