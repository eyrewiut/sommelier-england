/*Documentation for creating new app updates can be found at https://v4.keystonejs.com/documentation/database/application-updates*/
var moment = require("moment/moment");

var arrayOfWinners = [
	{"year": moment("2019", "YYYY"), "name.first": "Romair", "name.last": "Bourger", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2018", "YYYY"), "name.first": "Alex", "name.last": "Freguin", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2017", "YYYY"), "name.first": "Mathias", "name.last": "Camilleri", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2016", "YYYY"), "name.first": "Terry", "name.last": "Kandylis", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2015", "YYYY"), "name.first": "Tanguy", "name.last": "Martin", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2014", "YYYY"), "name.first": "Kathrine", "name.last": "Larsen", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2013", "YYYY"), "name.first": "Clement", "name.last": "Robert", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2012", "YYYY"), "name.first": "Jan", "name.last": "Konetzki", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2011", "YYYY"), "name.first": "Yohann", "name.last": "Jousselin", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2010", "YYYY"), "name.first": "Christopher", "name.last": "Delalonde", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2009", "YYYY"), "name.first": "Laura", "name.last": "Rhys", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2008", "YYYY"), "name.first": "Gearoid", "name.last": "Devaney", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2007", "YYYY"), "name.first": "Nicolas", "name.last": "Clerc", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2006", "YYYY"), "name.first": "Claire", "name.last": "Thevenot", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2005", "YYYY"), "name.first": "Matthew", "name.last": "Wilkin", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2004", "YYYY"), "name.first": "Eric", "name.last": "Zwiebel", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2003", "YYYY"), "name.first": "Loic", "name.last": "Maillet", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2002", "YYYY"), "name.first": "Xavier", "name.last": "Rousset", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2001", "YYYY"), "name.first": "James", "name.last": "Payne", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("2000", "YYYY"), "name.first": "Matthieu", "name.last": "Longuere", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1999", "YYYY"), "name.first": "Alan", "name.last": "Holmes", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1998", "YYYY"), "name.first": "Ronan", "name.last": "Sayburn", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1997", "YYYY"), "name.first": "Vincent", "name.last": "Gasnier", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1996", "YYYY"), "name.first": "Franck", "name.last": "Massard", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1995", "YYYY"), "name.first": "Henri", "name.last": "Chapon", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1994", "YYYY"), "name.first": "Mark", "name.last": "Walter", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1993", "YYYY"), "name.first": "Nicholas", "name.last": "Mobbs", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1992", "YYYY"), "name.first": "Gerard", "name.last": "Basset", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1991", "YYYY"), "name.first": "Michael", "name.last": "Simms", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1990", "YYYY"), "name.first": "John", "name.last": "Walker", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1989", "YYYY"), "name.first": "Gerard", "name.last": "Basset", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1988", "YYYY"), "name.first": "Stephen", "name.last": "Wilcock", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1987", "YYYY"), "name.first": "Simon", "name.last": "Hopkinson", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1986", "YYYY"), "name.first": "Michael", "name.last": "Varney", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1985", "YYYY"), "name.first": "David", "name.last": "Hair", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1984", "YYYY"), "name.first": "Michael", "name.last": "Simms", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1983", "YYYY"), "name.first": "Bryan", "name.last": "Dawes", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1982", "YYYY"), "name.first": "Charles", "name.last": "Piggin", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1981", "YYYY"), "name.first": "Claudia", "name.last": "Harris", "competition": "best_sommelier_uk", "vintage": undefined },
	{"year": moment("1980", "YYYY"), "name.first": "June ", "name.last": "Schmidt – Lowe", "competition": "best_sommelier_uk", "vintage": undefined }, 
];

exports.create = {
	Winner: arrayOfWinners
};