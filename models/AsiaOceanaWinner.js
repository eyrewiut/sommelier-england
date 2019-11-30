const keystone = require("keystone");

//Initialize a new keystone list
var Winner = new keystone.List("AsiaOceanaWinner");

//Define the fields for the model
Winner.add({
	competition: { 
		type: keystone.Field.Types.Select, noedit: true, index: true, required: true, initial: true, default: "asia_oceana", options: [
			{ value: "asia_oceana", label: "Asia & Oceana" },
		]
	},
	name: { type: keystone.Field.Types.Name, initial: true, required: true, index: true },
	year: { type: keystone.Field.Types.Date, format: "YYYY", inputFormat: "YYYY", todayButton: false, initial: true, required: true, index: true },
	country: { type: keystone.Field.Types.Text, initial: true, required: true, label: "Representing Country", note: "(The country being represented, not the location)" },
});

Winner.defaultSort = "-year"; //Default sorting in admin UI
Winner.defaultColumns = "competition, name, year"; //Columns to be displayed in admin UI
Winner.register();