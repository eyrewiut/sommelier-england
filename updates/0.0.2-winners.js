const moment = require("moment/moment");
let best_sommelier_uk = [
	{"year": moment("2019", "YYYY"), "name.first": "Romair", "name.last": "Bourger", "competition": "best_sommelier_uk", },
	{"year": moment("2018", "YYYY"), "name.first": "Alex", "name.last": "Freguin", "competition": "best_sommelier_uk", },
	{"year": moment("2017", "YYYY"), "name.first": "Mathias", "name.last": "Camilleri", "competition": "best_sommelier_uk", },
	{"year": moment("2016", "YYYY"), "name.first": "Terry", "name.last": "Kandylis", "competition": "best_sommelier_uk", },
	{"year": moment("2015", "YYYY"), "name.first": "Tanguy", "name.last": "Martin", "competition": "best_sommelier_uk", },
	{"year": moment("2014", "YYYY"), "name.first": "Kathrine", "name.last": "Larsen", "competition": "best_sommelier_uk", },
	{"year": moment("2013", "YYYY"), "name.first": "Clement", "name.last": "Robert", "competition": "best_sommelier_uk", },
	{"year": moment("2012", "YYYY"), "name.first": "Jan", "name.last": "Konetzki", "competition": "best_sommelier_uk", },
	{"year": moment("2011", "YYYY"), "name.first": "Yohann", "name.last": "Jousselin", "competition": "best_sommelier_uk", },
	{"year": moment("2010", "YYYY"), "name.first": "Christopher", "name.last": "Delalonde", "competition": "best_sommelier_uk", },
	{"year": moment("2009", "YYYY"), "name.first": "Laura", "name.last": "Rhys", "competition": "best_sommelier_uk", },
	{"year": moment("2008", "YYYY"), "name.first": "Gearoid", "name.last": "Devaney", "competition": "best_sommelier_uk", },
	{"year": moment("2007", "YYYY"), "name.first": "Nicolas", "name.last": "Clerc", "competition": "best_sommelier_uk", },
	{"year": moment("2006", "YYYY"), "name.first": "Claire", "name.last": "Thevenot", "competition": "best_sommelier_uk", },
	{"year": moment("2005", "YYYY"), "name.first": "Matthew", "name.last": "Wilkin", "competition": "best_sommelier_uk", },
	{"year": moment("2004", "YYYY"), "name.first": "Eric", "name.last": "Zwiebel", "competition": "best_sommelier_uk", },
	{"year": moment("2003", "YYYY"), "name.first": "Loic", "name.last": "Maillet", "competition": "best_sommelier_uk", },
	{"year": moment("2002", "YYYY"), "name.first": "Xavier", "name.last": "Rousset", "competition": "best_sommelier_uk", },
	{"year": moment("2001", "YYYY"), "name.first": "James", "name.last": "Payne", "competition": "best_sommelier_uk", },
	{"year": moment("2000", "YYYY"), "name.first": "Matthieu", "name.last": "Longuere", "competition": "best_sommelier_uk", },
	{"year": moment("1999", "YYYY"), "name.first": "Alan", "name.last": "Holmes", "competition": "best_sommelier_uk", },
	{"year": moment("1998", "YYYY"), "name.first": "Ronan", "name.last": "Sayburn", "competition": "best_sommelier_uk", },
	{"year": moment("1997", "YYYY"), "name.first": "Vincent", "name.last": "Gasnier", "competition": "best_sommelier_uk", },
	{"year": moment("1996", "YYYY"), "name.first": "Franck", "name.last": "Massard", "competition": "best_sommelier_uk", },
	{"year": moment("1995", "YYYY"), "name.first": "Henri", "name.last": "Chapon", "competition": "best_sommelier_uk", },
	{"year": moment("1994", "YYYY"), "name.first": "Mark", "name.last": "Walter", "competition": "best_sommelier_uk", },
	{"year": moment("1993", "YYYY"), "name.first": "Nicholas", "name.last": "Mobbs", "competition": "best_sommelier_uk", },
	{"year": moment("1992", "YYYY"), "name.first": "Gerard", "name.last": "Basset", "competition": "best_sommelier_uk", },
	{"year": moment("1991", "YYYY"), "name.first": "Michael", "name.last": "Simms", "competition": "best_sommelier_uk", },
	{"year": moment("1990", "YYYY"), "name.first": "John", "name.last": "Walker", "competition": "best_sommelier_uk", },
	{"year": moment("1989", "YYYY"), "name.first": "Gerard", "name.last": "Basset", "competition": "best_sommelier_uk", },
	{"year": moment("1988", "YYYY"), "name.first": "Stephen", "name.last": "Wilcock", "competition": "best_sommelier_uk", },
	{"year": moment("1987", "YYYY"), "name.first": "Simon", "name.last": "Hopkinson", "competition": "best_sommelier_uk", },
	{"year": moment("1986", "YYYY"), "name.first": "Michael", "name.last": "Varney", "competition": "best_sommelier_uk", },
	{"year": moment("1985", "YYYY"), "name.first": "David", "name.last": "Hair", "competition": "best_sommelier_uk", },
	{"year": moment("1984", "YYYY"), "name.first": "Michael", "name.last": "Simms", "competition": "best_sommelier_uk", },
	{"year": moment("1983", "YYYY"), "name.first": "Bryan", "name.last": "Dawes", "competition": "best_sommelier_uk", },
	{"year": moment("1982", "YYYY"), "name.first": "Charles", "name.last": "Piggin", "competition": "best_sommelier_uk", },
	{"year": moment("1981", "YYYY"), "name.first": "Claudia", "name.last": "Harris", "competition": "best_sommelier_uk", },
	{"year": moment("1980", "YYYY"), "name.first": "June ", "name.last": "Schmidt – Lowe", "competition": "best_sommelier_uk", }, 
];
let asi = [
	{"year": moment("2019", "YYYY"), "name.first": "Tamas", "name.last": "Czinki", "competition": "asi_certificate", "vintage": "Gold"},
	{"year": moment("2019", "YYYY"), "name.first": "Gareth", "name.last": "Ferreira", "competition": "asi_certificate", "vintage": "Gold"},
	{"year": moment("2019", "YYYY"), "name.first": "Marco", "name.last": "Iaccarino", "competition": "asi_certificate", "vintage": "Gold"},
	{"year": moment("2019", "YYYY"), "name.first": "Quentin", "name.last": "Loisel", "competition": "asi_certificate", "vintage": "Gold"},
	{"year": moment("2019", "YYYY"), "name.first": "Seika", "name.last": "Hosokawa", "competition": "asi_certificate", "vintage": "Silver"},
	{"year": moment("2019", "YYYY"), "name.first": "Michihito", "name.last": "Higashihara", "competition": "asi_certificate", "vintage": "Silver"},
	{"year": moment("2019", "YYYY"), "name.first": "Charles", "name.last": "Carron-Brown", "competition": "asi_certificate", "vintage": "Bronze"},
	{"year": moment("2018", "YYYY"), "name.first": "Eric", "name.last": "Zwiebel", "competition": "asi_certificate", "vintage": "Gold Platinum"},
];
let world = [
	{"year": moment("2019", "YYYY"), "name.first": "Marc", "name.last": "Almert", "competition": "world", "country": "Germany"},
	{"year": moment("2016", "YYYY"), "name.first": "Arvid", "name.last": "Rosengren", "competition": "world", "country": "Sweden"},
	{"year": moment("2013", "YYYY"), "name.first": "Paolo", "name.last": "Basso", "competition": "world", "country": "Switzerland"},
	{"year": moment("2010", "YYYY"), "name.first": "Gerard", "name.last": "Basset", "competition": "world", "country": "United Kingdom"},
	{"year": moment("2007", "YYYY"), "name.first": "Andreas", "name.last": "Larsson", "competition": "world", "country": "Sweden"},
	{"year": moment("2004", "YYYY"), "name.first": "Enrico", "name.last": "Bernardo", "competition": "world", "country": "Italy"},
	{"year": moment("2000", "YYYY"), "name.first": "Olivier", "name.last": "Poussier", "competition": "world", "country": "France"},
	{"year": moment("1998", "YYYY"), "name.first": "Markus", "name.last": "Del Monego", "competition": "world", "country": "Germany"},
	{"year": moment("1995", "YYYY"), "name.first": "Shinya", "name.last": "Tasaki", "competition": "world", "country": "Japan"},
	{"year": moment("1992", "YYYY"), "name.first": "Phillipe", "name.last": "Faure-Brac", "competition": "world", "country": "France"},
	{"year": moment("1989", "YYYY"), "name.first": "Serge", "name.last": "Dubs", "competition": "world", "country": "France"},
	{"year": moment("1986", "YYYY"), "name.first": "Jean-Claude", "name.last": "Jambon", "competition": "world", "country": "France"},
	{"year": moment("1983", "YYYY"), "name.first": "Jean-Luc", "name.last": "Pouteau", "competition": "world", "country": "France"},
	{"year": moment("1978", "YYYY"), "name.first": "Giuseppe", "name.last": "Vaccarinni", "competition": "world", "country": "Italy"},
	{"year": moment("1971", "YYYY"), "name.first": "Piero", "name.last": "Sattanino", "competition": "world", "country": "Italy"},
	{"year": moment("1969", "YYYY"), "name.first": "Armand", "name.last": "Melkonian", "competition": "world", "country": "France"},
];
let europe = [
	{"year": moment("2017", "YYYY"), "name.first": "Raimonds", "name.last": "Tomsons", "competition": "europe", "country": "Latvia"},
	{"year": moment("2013", "YYYY"), "name.first": "Arvid", "name.last": "Ronsengren", "competition": "europe", "country": "Sweden"},
	{"year": moment("2010", "YYYY"), "name.first": "Paolo", "name.last": "Basso", "competition": "europe", "country": "Italy"},
	{"year": moment("2008", "YYYY"), "name.first": "Isa", "name.last": "Bal", "competition": "europe", "country": "Turkey"},
	{"year": moment("2006", "YYYY"), "name.first": "Robert", "name.last": "Lie", "competition": "europe", "country": "Norway"},
	{"year": moment("2004", "YYYY"), "name.first": "Andreas", "name.last": "Larsson", "competition": "europe", "country": "Sweden"},
	{"year": moment("2002", "YYYY"), "name.first": "Enrico", "name.last": "Bernardo", "competition": "europe", "country": "Italy"},
	{"year": moment("2000", "YYYY"), "name.first": "Frack", "name.last": "Thomas", "competition": "europe", "country": "France"},
	{"year": moment("1998", "YYYY"), "name.first": "Eric", "name.last": "Duret", "competition": "europe", "country": "France"},
	{"year": moment("1996", "YYYY"), "name.first": "Gerard", "name.last": "Basset", "competition": "europe", "country": "United Kingdom"},
	{"year": moment("1994", "YYYY"), "name.first": "Eric", "name.last": "Beaumard", "competition": "europe", "country": "France"},
	{"year": moment("1992", "YYYY"), "name.first": "Bernd", "name.last": "Kreis", "competition": "europe", "country": "Germany"},
	{"year": moment("1990", "YYYY"), "name.first": "Mikael", "name.last": "Söderström", "competition": "europe", "country": "Sweden"},
	{"year": moment("1988", "YYYY"), "name.first": "Serge", "name.last": "Dubs", "competition": "europe", "country": "France"},
];
let americas = [
	{"year": moment("2018", "YYYY"), "name.first": "Pier-Alexis", "name.last": "Soulière", "competition": "americas", "country": "Canada"},
	{"year": moment("2015", "YYYY"), "name.first": "Paz", "name.last": "Levinson", "competition": "americas", "country": "Argentina"},
	{"year": moment("2011", "YYYY"), "name.first": "Véronique", "name.last": "Rivest", "competition": "americas", "country": "Canada"},
	{"year": moment("2009", "YYYY"), "name.first": "Elyse", "name.last": "Lambert", "competition": "americas", "country": "Canada"},
	{"year": moment("2004", "YYYY"), "name.first": "Ghislain", "name.last": "Caron", "competition": "americas", "country": "Canada"},
];
let asia_oceana = [
	{"year": moment("2018", "YYYY"), "name.first": "Wataru", "name.last": "Iwata", "competition": "asia_oceana", "country": "Japan"},
	{"year": moment("2015", "YYYY"), "name.first": "Hiroshi", "name.last": "Ishida", "competition": "asia_oceana", "country": "Japan"},
	{"year": moment("2012", "YYYY"), "name.first": "Franck", "name.last": "Moreau", "competition": "asia_oceana", "country": "Australia"},
	{"year": moment("2009", "YYYY"), "name.first": "Satoru", "name.last": "Mori", "competition": "asia_oceana", "country": "Japan"},
];
exports.create = {
	BestSommelierUkWinner: best_sommelier_uk,
	AsiChampion: asi,
	EuropeWinner: europe,
	WorldWinner: world,
	AmericasWinner: americas,
	AsiaOceanaWinner: asia_oceana
};