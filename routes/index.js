const keystone = require("keystone");
var middleware = require("./middleware.js");
var importRoutes = keystone.importer(__dirname);

keystone.pre("routes", middleware.initLocals);
keystone.pre("render", middleware.flashMessages);

//Import routes
var routes = {
	views: importRoutes("./views"),
};

//Export & Setup route bindings
exports = module.exports = function(app) {
	app.all("/", routes.views.index);
};