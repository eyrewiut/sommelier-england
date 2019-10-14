const keystone = require("keystone");

//Initialize a new keystone list
var Winner = new keystone.List("Winner");

//Define the fields for the creation form & database
Winner.add({
	competition: { type: keystone.Field.Types.Select, options: "Best Sommelier UK, ASI Certificate, World, Europe, Americas, Asia & Oceana", default: "Best Sommelier UK", initial: true, required: true, index: true },
	name: { type: keystone.Field.Types.Name, initial: true, required: true, index: true },
	year: { type: keystone.Field.Types.Date, format: "YYYY", inputFormat: "YYYY", todayButton: false, initial: true, required: true, index: true }
});

Winner.defaultSort = "-year";
Winner.defaultColumns = "competition, name, year";
Winner.register();