const _ = require("lodash");

//Initialise standard view locals
exports.initLocals = function(req, res, next) {
	res.locals.navLinks = [
		{ label: "Home", key: "home", href: "/" },
		{ label: "News", key: "news", href: "/news"},
		{ label: "Events", key: "events", href: "/events"},
		{ label: "Competitions", key: "competitions", href: "/competitions"},
	];
	res.locals.user = req.user;
	next();
};

//Fetches and clears flashMessages before a view is rendered
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash("info"),
		success: req.flash("success"),
		warning: req.flash("warning"),
		error: req.flash("error"),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};

//Prevent people from accessing a protected page without permission
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash("error", "Please sign in to access this page.");
		res.redirect("/keystone/signin");
	} else {
		next();
	}
};