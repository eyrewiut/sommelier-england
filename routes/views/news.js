var keystone = require("keystone");
//var async = require("async");
var Post = keystone.list("Post");

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = "news";
	locals.pageTitle = "News";
	locals.posts = [];

	/*Load posts*/
	view.on("init", function(next) {
		/*Post.model.find({"state": "published"}).sort("postedDate").exec(function(err, results) {
			if (err) {
				return next(err);
			}
			locals.posts = results;
			next(err);
		});*/
		Post.paginate({
			page: req.query.page || 1,
			perPage: 12,
			maxPages: 10
		}).where({"state": "published"}).sort("postedDate").exec(function(err, results) {
			locals.posts = results;
			next(err);
		});
	});

	view.render("news");
};