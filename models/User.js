const keystone = require("keystone");

//Initialize a new keystone list
var User = new keystone.List("User");

//Define the fields for the creation form & database
User.add({
	name: { type: keystone.Field.Types.Name, initial: true, required: true, index: true },
	email: { type: keystone.Field.Types.Email, initial: true, required: true, unique: true },
	password: { type: keystone.Field.Types.Password, initial: true, required: true },
}, "Permissions", {
	isAdmin: { type: Boolean, label: "Is Administrator", index: true }
});

//Provide Access to the Keystone admin panel
User.schema.virtual("canAccessKeystone").get(function() {
	return this.isAdmin;
});

User.defaultColumns = "name, email, isAdmin";
User.register();