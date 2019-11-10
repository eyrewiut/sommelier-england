var Keystone = require("keystone");
var _ = require("lodash");
var Winner = Keystone.list("Winner");

exports = module.exports = function(req, res) {
	var view = new Keystone.View(req, res);
	var locals = res.locals;

	//Add page properties to locals
	locals.section = "competitions";
	locals.pageTitle = "Competitions";

	//Called whenever the page requested
	locals.winnerCount = [];
	view.on("init", function(next) {
		//Find all winners from the database
		Winner.model.find().sort("-year -vintage.listPriority").exec(function(err, results) {
			if (err) {
				next(err);
			}
			var competitions = ["best_sommelier_uk","asi_certificate","world","europe","americas","asia_oceana"];
			//put the results into groups and ensure add empty groups if there is no results for a group
			var groups = _.groupBy(results, "competition"); 
			competitions.forEach(competition => {
				if (!Object.prototype.hasOwnProperty.call(groups, competition)) {
					Object.defineProperty(groups, competition, {
						value: [],
						writable: true
					});
				}
			});
			//Add the groups to locals
			locals.competitions = groups;
			next(err);
		});
	});

	view.render("competitions"); //Render the template into html
};