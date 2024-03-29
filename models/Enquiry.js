const keystone = require("keystone");
let Types = keystone.Field.Types;

var Enquiry = new keystone.List("Enquiry", { 
	nocreate: true,
	noedit: true 
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now },
});

Enquiry.defaultSort = "-createdAt";
Enquiry.defaultColumns = "name, email, createdAt";
Enquiry.register();