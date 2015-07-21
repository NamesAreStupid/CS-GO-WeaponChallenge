// load http module
var http = require("http");
var port = 8081;

var fs = require('fs');
var weapons = JSON.parse(fs.readFileSync('WeaponsNew.json', 'utf8'));
//console.log(weapons);
/*	for(var i=0; i<= weapons.length -1; i++) {
			console.log(weapons[i].name);
	};
*/

var user = {
	usedList : [],
	faction : "ct",
	money : 7000
}

var inArray(var value, var array) {
	for( i in array) {
		if(i === value) {
			return true;
		}
	}
	return false;
}

var filter = function() {
	if(!inArray(weapon, usedList) &&
		inArray(faction, weapon.factions) ) {
		return true;
	}
	return false;
};

//create Server
http.createServer(function(request, response) {
	//Send the HTTP header
	//HTTP Status 200: OK
	//Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//Send the response body
	var index = parseInt(Math.random()*weapons.length);
	var weapon = weapons[index];
	usedList.concat(weapon);
	var message = weapon.name +"\n"+ weapon.type +"\n"+ weapon.factions +"\n"+ weapon.price + "$";

	response.end(message);
}).listen(port);

//Console will print the message
console.log('Server running at http://127.0.0.1:' + port + '/');