const keystone = require("keystone");
var middleware = require("./middleware.js");
var importRoutes = keystone.importer(__dirname);

keystone.pre("routes", middleware.initLocals);
keystone.pre("render", middleware.flashMessages);

keystone.set("404", function(req, res) {
	res.status(404).render("error", {
		errTitle: "404 Error",
		errMessage: "We couldn't find this page, Are you sure it exists?",
		pageTitle: "Error"
	});
});
keystone.set("500", function(err, req, res) {
	var title, message;
	if (err instanceof Error && process.env.NODE_ENV != "production") {
		title = err.name, message = err.message;
	} else {
		title = "500 Error", message = "There was an error, sorry for the inconvenience";
	}
	res.status(500).render("error", {
		errTitle: title,
		errMessage: message,
		pageTitle: "Error"
	});
});

//Import routes
var routes = {
	views: importRoutes("./views"),
};

//Export & Setup route bindings
exports = module.exports = function(app) {
	app.all("/", routes.views.index);
	app.get("/competitions", routes.views.competitions);
	app.get("/news", routes.views.news);
	app.get("/news/posts/:post", routes.views.post);
};