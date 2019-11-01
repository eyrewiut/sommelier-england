var keystone = require("keystone");
var _ = require("lodash");
var Event = keystone.list("Event");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = "events";
	locals.pageTitle = "Events";
	
	view.on("init", function(next) {
		Event.model.find().sort("-date").exec(function(err, results) {
			if (err) {
				return next(err);
			}
			
			var e = _.groupBy(results, "year");
			for (const key in e) {
				if (e.hasOwnProperty(key)) {
					e[key].year = key;
				}
			}
			locals.events = _.orderBy(e, "year", "desc");

			next(err);
		});
	});
	view.render("events");
};