/*Documentation for creating new app updates can be found at https://v4.keystonejs.com/documentation/database/application-updates*/
var moment = require("moment/moment");

var arrayOfWinners = [
	{"year": moment("2019", "YYYY"), "name.first": "Tamas", "name.last": "Czinki", "competition": "asi_certificate", "vintage": "gold"},
	{"year": moment("2019", "YYYY"), "name.first": "Gareth", "name.last": "Ferreira", "competition": "asi_certificate", "vintage": "gold"},
	{"year": moment("2019", "YYYY"), "name.first": "Marco", "name.last": "Iaccarino", "competition": "asi_certificate", "vintage": "gold"},
	{"year": moment("2019", "YYYY"), "name.first": "Quentin", "name.last": "Loisel", "competition": "asi_certificate", "vintage": "gold"},
	{"year": moment("2019", "YYYY"), "name.first": "Seika", "name.last": "Hosokawa", "competition": "asi_certificate", "vintage": "silver"},
	{"year": moment("2019", "YYYY"), "name.first": "Michihito", "name.last": "Higashihara", "competition": "asi_certificate", "vintage": "silver"},
	{"year": moment("2019", "YYYY"), "name.first": "Charles", "name.last": "Carron-Brown", "competition": "asi_certificate", "vintage": "bronze"},
	{"year": moment("2018", "YYYY"), "name.first": "Eric", "name.last": "Zwiebel", "competition": "asi_certificate", "vintage": "gold_platinum"},
];
exports.create = {
	Winner: arrayOfWinners
};
