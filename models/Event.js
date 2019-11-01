var keystone = require("keystone");
var moment = require("moment");
var Types = keystone.Field.Types;

var Event = new keystone.List("Event", {
	map: { name: "name" },
});

Event.add({
	name: { type: Types.Text, min: 10, max: 70, required: true, initial: true },
	date: { type: Types.Date, inputFormat: "DD/MM/YYYY", required: true, initial: true },
	location: {
		addrName: { type: Types.Text, initial: true, label: "Short name", note: "e.g: A Short recognizable name (Not Required)" },
		addrLnOne: { type: Types.Text, required: true, initial: true, max: 255, label: "Address Line 1", note: "(Required)" },
		addrLnTwo: { type: Types.Text, initial: true, max: 255, label: "Address Line 1", note: "(Not Required)" },
		town: { type: Types.Text, required: true, initial: true, max: 35, label: "Town", note: "(Required)" },
		county: { type: Types.Text, initial: true, max: 35, label: "County", note: "(Recommended but not required)" },
		postcode: { type: Types.Text, required: true, initial: true, max: 8, label: "Postcode", note: "(Required)" }
	}
});

Event.schema.virtual("year").get(function() {
	return moment(this.date).format("YYYY");
});

Event.schema.virtual("location.full").get(function() {
	var l = this.location;
	var full = 
		`
		${l.addrLnOne}, 
		${l.addrLnTwo ? l.addrLnTwo + "," : ""}
		${l.town},
		${l.county ? l.county + "," : ""}
		${l.postcode} 
		`;
	return full;
});

Event.defaultColumns = "name, date, location";
Event.register();