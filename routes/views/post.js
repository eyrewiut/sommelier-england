var keystone = require("keystone");
var Post = keystone.list("Post");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//Set page specific locals
	locals.section = "blog";

	view.on("init", function(next) {
		Post.model.findOne({ "slug": req.params.post , "state": "published"}).exec(function(err, result) {
			if (err) {
				next(err);
			}
			var post = result;
			locals.post = post;
			locals.pageTitle = result.title;
			next(err);
		});
	});

	view.render("post");
};