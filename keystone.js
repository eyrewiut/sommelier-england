require("dotenv").config();
const keystone = require("keystone");

keystone.init({
	//Set project name and brand
	"name": "National UK Sommelier Organisation",
	"brand": "Sommelier England",

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

	"cloudinary config": process.env.CLOUDINARY_URL,

	"wysiwyg override toolbar": true,
	"wysiwyg additional buttons": 
	"formatselect, alignleft, aligncenter, alignright, alignjustify, bold, italic, underline, blockquote, link, bullist, numlist",
	"wysiwyg additional plugins": "hr, wordcount, visualblocks, lists",
});


//Import database models
keystone.import("models");

keystone.set("nav", {
	"winners": ["BestSommelierUkWinner", "AsiChampion", "EuropeWinner", "WorldWinner", "AmericasWinner", "AsiaOceanaWinner"],
	"users": "users",
	"posts": "posts",
	"enquiries": "enquiries",
	"events": "events",
});

//Setup common locals for the templates (add request-unique locals to middleware.js)
keystone.set("locals", {
	_: require("lodash"),
	env: keystone.get("env"),
	utils: keystone.utils,
	editable: keystone.content.editable,
	brand: "National UK Sommelier Organization",
	description: "The National UK Sommelier Organisation is promoting aspiring individuals to join the Sommelier world across the UK."
});

//Load routes
keystone.set("routes", require("./routes"));

keystone.start();