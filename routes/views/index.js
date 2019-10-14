var keystone = require("keystone");
var Enquiry = keystone.list("Enquiry");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//Set page specific locals
	locals.section = "home";
	locals.pageTitle = "Home Page";

	locals.formData = req.body || {};
	locals.validationErrors = { };
	locals.enquirySubmitted = false;

	//On POST requests, add Enquiries to the database
	view.on("post", { action: "/" }, function(next) {
		var newEnquiry = new Enquiry.model();
		var updater = newEnquiry.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: "name, email, message",
			errorMessage: "There was a problem submitting your enquiry:",
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
	});

	//Render the page
	view.render("index");
};