const keystone = require("keystone");

//Initialize a new keystone list
var Winner = new keystone.List("AsiChampion");

//Define the fields for the model
Winner.add({
	competition: { 
		type: keystone.Field.Types.Select, noedit: true, index: true, required: true, initial: true, default: "asi_certificate", options: [
			{ value: "asi_certificate", label: "ASI Certificate" },
		]
	},
	name: { type: keystone.Field.Types.Name, initial: true, required: true, index: true },
	year: { type: keystone.Field.Types.Date, format: "YYYY", inputFormat: "YYYY", todayButton: false, initial: true, required: true, index: true },
	vintage: { type: keystone.Field.Types.Select, initial: true, required: true, options: [
		{ value: "Gold Platinum", label: "Gold Platinum", listPriority: 1 },
		{ value: "Gold", label: "Gold", listPriority: 2 },
		{ value: "Silver", label: "Silver", listPriority: 3 },
		{ value: "Bronze", label: "Bronze", listPriority: 4 },
	] },
});

Winner.defaultSort = "-year"; //Default sorting in admin UI
Winner.defaultColumns = "competition, name, year, vintage"; //Columns to be displayed in admin UI
Winner.register();