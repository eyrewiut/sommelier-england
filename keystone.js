require("dotenv").config();
const keystone = require("keystone");

keystone.init({
	//Set project name and brand
	"name": "National UK Sommelier Organisation",
	"brand": "National UK Sommelier Organisation",

	//Generate sass files from css and set static directory
	"sass": "public",
	"sass options": { "outputStyle": "compressed" },
	"static": "public",
	//"favicon": "public/favicon.ico",

	//Set view engine to pug
	"view engine": "pug",
	"views": "templates/views",

	//Handle sessions etc
	"session": true,
	"session store": "mongo",
	
	//Enable admin authentication and 
	"user model": "User",
	"auth": true,
	"auto update": true,
});

//Import database models
keystone.import("models");

//Setup common locals for the templates (add request-unique locals to middleware.js)
keystone.set("locals", {
	_: require("lodash"),
	env: keystone.get("env"),
	utils: keystone.utils,
	editable: keystone.content.editable,
	brand: keystone.get("brand")
});

//Load routes
keystone.set("routes", require("./routes"));

keystone.start();