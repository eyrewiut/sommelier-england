var keystone = require("keystone");
var _ = require("lodash");
var Event = keystone.list("Event");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//Add page properties to locals
	locals.section = "events";
	locals.pageTitle = "Events";
	
	//Called whenever the page is requested
	view.on("init", function(next) {
		//Find events from the database
		Event.model.find().sort("-date").exec(function(err, results) {
			if (err) {
				return next(err);
			}
			//Group events by year and add the year to the 
			var e = _.groupBy(results, "year");
			for (const key in e) {
				if (Object.prototype.hasOwnProperty.call(e, key)) {
					e[key].year = key;
				}
			}
			//Order the events by year
			locals.events = _.orderBy(e, "year", "desc");
			next(err);
		});
	});
	view.render("events"); //Render the template into html
};