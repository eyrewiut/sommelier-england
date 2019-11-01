/*Documentation for creating new app updates can be found at https://v4.keystonejs.com/documentation/database/application-updates*/
var moment = require("moment/moment");

var arrayOfWinners = [
	{"year": moment("2019", "YYYY"), "name.first": "Romair", "name.last": "Bourger"},
	{"year": moment("2018", "YYYY"), "name.first": "Alex", "name.last": "Freguin"},
	{"year": moment("2017", "YYYY"), "name.first": "Mathias", "name.last": "Camilleri"},
	{"year": moment("2016", "YYYY"), "name.first": "Terry", "name.last": "Kandylis"},
	{"year": moment("2015", "YYYY"), "name.first": "Tanguy", "name.last": "Martin"},
	{"year": moment("2014", "YYYY"), "name.first": "Kathrine", "name.last": "Larsen"},
	{"year": moment("2013", "YYYY"), "name.first": "Clement", "name.last": "Robert"},
	{"year": moment("2012", "YYYY"), "name.first": "Jan", "name.last": "Konetzki"},
	{"year": moment("2011", "YYYY"), "name.first": "Yohann", "name.last": "Jousselin"},
	{"year": moment("2010", "YYYY"), "name.first": "Christopher", "name.last": "Delalonde"},
	{"year": moment("2009", "YYYY"), "name.first": "Laura", "name.last": "Rhys"},
	{"year": moment("2008", "YYYY"), "name.first": "Gearoid", "name.last": "Devaney"},
	{"year": moment("2007", "YYYY"), "name.first": "Nicolas", "name.last": "Clerc"},
	{"year": moment("2006", "YYYY"), "name.first": "Claire", "name.last": "Thevenot"},
	{"year": moment("2005", "YYYY"), "name.first": "Matthew", "name.last": "Wilkin"},
	{"year": moment("2004", "YYYY"), "name.first": "Eric", "name.last": "Zwiebel"},
	{"year": moment("2003", "YYYY"), "name.first": "Loic", "name.last": "Maillet"},
	{"year": moment("2002", "YYYY"), "name.first": "Xavier", "name.last": "Rousset"},
	{"year": moment("2001", "YYYY"), "name.first": "James", "name.last": "Payne"},
	{"year": moment("2000", "YYYY"), "name.first": "Matthieu", "name.last": "Longuere"},
	{"year": moment("1999", "YYYY"), "name.first": "Alan", "name.last": "Holmes"},
	{"year": moment("1998", "YYYY"), "name.first": "Ronan", "name.last": "Sayburn"},
	{"year": moment("1997", "YYYY"), "name.first": "Vincent", "name.last": "Gasnier"},
	{"year": moment("1996", "YYYY"), "name.first": "Franck", "name.last": "Massard"},
	{"year": moment("1995", "YYYY"), "name.first": "Henri", "name.last": "Chapon"},
	{"year": moment("1994", "YYYY"), "name.first": "Mark", "name.last": "Walter"},
	{"year": moment("1993", "YYYY"), "name.first": "Nicholas", "name.last": "Mobbs"},
	{"year": moment("1992", "YYYY"), "name.first": "Gerard", "name.last": "Basset"},
	{"year": moment("1991", "YYYY"), "name.first": "Michael", "name.last": "Simms"},
	{"year": moment("1990", "YYYY"), "name.first": "John", "name.last": "Walker"},
	{"year": moment("1989", "YYYY"), "name.first": "Gerard", "name.last": "Basset"},
	{"year": moment("1988", "YYYY"), "name.first": "Stephen", "name.last": "Wilcock"},
	{"year": moment("1987", "YYYY"), "name.first": "Simon", "name.last": "Hopkinson"},
	{"year": moment("1986", "YYYY"), "name.first": "Michael", "name.last": "Varney"},
	{"year": moment("1985", "YYYY"), "name.first": "David", "name.last": "Hair"},
	{"year": moment("1984", "YYYY"), "name.first": "Michael", "name.last": "Simms"},
	{"year": moment("1983", "YYYY"), "name.first": "Bryan", "name.last": "Dawes"},
	{"year": moment("1982", "YYYY"), "name.first": "Charles", "name.last": "Piggin"},
	{"year": moment("1981", "YYYY"), "name.first": "Claudia", "name.last": "Harris"},
	{"year": moment("1980", "YYYY"), "name.first": "June ", "name.last": "Schmidt – Lowe"}, 
];

exports.create = {
	Winner: arrayOfWinners
};