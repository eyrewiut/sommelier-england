var Keystone = require("keystone");
var Winner = Keystone.list("Winner");

exports = module.exports = function(req, res) {
	var view = new Keystone.View(req, res);
	var locals = res.locals;

	locals.section = "competitions";
	locals.pageTitle = "Competitions";
	locals.winnerCount = [];

	view.on("init", function(next) {
		var competitions = [
			{ name: "Best Sommelier UK", },
			{ name: "ASI Certificate", },
			{ name: "World", },
			{ name: "Europe", },
			{ name: "Americas", },
			{ name: "Asia & Oceana", }, 
		];
		Winner.model.find().exec(function(err, results) {
			if (err) {
				next(err);
			}
			competitions.forEach(function(competition) {
				competition.winnerCount = 0; //Set the winnerCount to 0
				results.forEach(function(result) {
					if (result.competition == competition.name) {
						competition.winnerCount++; //Add 1 to the winnerCount
					}
				});
			});
			locals.winnerCount = competitions;
			next(err);
		});
	});

	view.query("winners", Winner.model.find().sort("-year"));
	view.render("competitions");
};