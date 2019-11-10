const keystone = require("keystone");

//Initialize a new keystone list
var Winner = new keystone.List("Winner");

//Define the fields for the model
Winner.add({
	competition: { 
		type: keystone.Field.Types.Select, index: true, required: true, initial: true, default: "best_sommelier_uk", options: [
			{ value: "best_sommelier_uk", label: "Best Sommelier UK" },
			{ value: "asi_certificate", label: "ASI Certificate" },
			{ value: "world", label: "World" },
			{ value: "europe", label: "Europe" },
			{ value: "americas", label: "Americas" },
			{ value: "asia_oceana", label: "Asia & Oceana" },
		]
	},
	name: { type: keystone.Field.Types.Name, initial: true, required: true, index: true },
	year: { type: keystone.Field.Types.Date, format: "YYYY", inputFormat: "YYYY", todayButton: false, initial: true, required: true, index: true },
	vintage: { type: keystone.Field.Types.Select, initial: true, required: false, options: [
		{ value: "gold_platinum", label: "Gold Platinum", listPriority: 1 },
		{ value: "gold", label: "Gold", listPriority: 2 },
		{ value: "silver", label: "Silver", listPriority: 3},
		{ value: "bronze", label: "Bronze", listPriority: 4},
	] },
});

Winner.defaultSort = "-year"; //Default sorting in admin UI
Winner.defaultColumns = "competition, name, year"; //Columns to be displayed in admin UI
Winner.register();