const keystone = require("keystone");

//Initialize a new keystone list
var Winner = new keystone.List("BestSommelierUkWinner");

//Define the fields for the model
Winner.add({
	competition: { 
		type: keystone.Field.Types.Select, nodedit: true, index: true, required: true, initial: true, default: "best_sommelier_uk", options: [
			{ value: "best_sommelier_uk", label: "Best Sommelier UK" },
		]
	},
	name: { type: keystone.Field.Types.Name, initial: true, required: true, index: true },
	year: { type: keystone.Field.Types.Date, format: "YYYY", inputFormat: "YYYY", todayButton: false, initial: true, required: true, index: true },
});

Winner.defaultSort = "-year"; //Default sorting in admin UI
Winner.defaultColumns = "competition, name, year"; //Columns to be displayed in admin UI
Winner.register();