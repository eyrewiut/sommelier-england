var Keystone = require("keystone");
var Types = Keystone.Field.Types;

var Post = new Keystone.List("Post", {
	map: { name: "title" },
	autokey: { path: "slug", from: "title", unique: true }
});

Post.add({
	title: { type: Types.Text, min: 10, max: 50, required: true, initial: true },
	state: { type: Types.Select, options: "draft, published, archived", default: "published", index: true, initial: true },
	content: {
		image: { type: Types.CloudinaryImage, autoCleanup: true, required: true, initial: true, note: "Upload an image for the post" },
		short: { type: Types.Textarea, height: 100, required: true, initial: true, note: "Write a short introduction to the post" },
		extended: { type: Types.Html, wysiwyg: true, height: 300, required: true, initial: true, note: "Write your full post here..." },
	},
	postedDate: { type: Types.Date, inputFormat: "DD/MM/YYYY", dependsOn: { state: "published" } }
});

Post.defaultColumns = "title, state, postedDate, content.image";
Post.register();
