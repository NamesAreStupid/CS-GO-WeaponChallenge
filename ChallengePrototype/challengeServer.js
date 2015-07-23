// load http module
var http = require('http');
var port = 8081;
var arrays = require('./../Util/Arrays.js');
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
	money : 16000
}

var weaponLeft = function(weaponList, usedList) {
	var weaponLeft = false;
	var newWeaponList = weaponList.slice();
	for(i in usedList) {
		newWeaponList.usedList[i]
	}
};

var filter = function(element) {
	if(!arrays.inArray(weapon, user.usedList) 
		//&&
		//inArray(user.faction, weapon.factions) &&
		//weapon.price <= user.money
		) {
		return true;
	}
	return false;
};

var filter = function(user) {
	var isNotUsed = function(element) {
		if(arrays.inArray(element)) {
			return false;
		} else {
			return true;
		}
	}
}

var filterWeapons = function(weapons, user) {
	var weaponsArray =  new Array(weapons);

	//remove used weapons
	weaponsArray = weaponsArray.filter(function(element) {
		return !(arrays.inArray(user.usedList, element));
	});
	//remove wrong faction
	weaponsArray = weaponsArray.filter(function(element) {
		return arrays.inArray(element.factions, user.faction);
	});
	//remove too expansive
	weaponsArray = weaponsArray.filter(function(element) {
		return (element.price >= user.money);
	});

	return weaponsArray;
}


//create Server
http.createServer(function(request, response) {
	var message;
	//if the user used all weapons the game is over!
	if(user.usedList.length != weapons.length) {	
		var filteredWeapons = filterWeapons(weapons, user);
		//Select next weapon
		var weapon;
		do{
			var index = parseInt(Math.random()*filteredWeapons.length);
			weapon = weapons[index];
		} while(!filter(weapon, user));
		user.usedList.push(weapon);

		message = weapon.name +"\n"+ weapon.type +"\n"+ weapon.factions +"\n"+ weapon.price + "$";

	} else {
		message = "All Weapons used! You beat the GAMEEEEEE!!!!!!!";
	}

	//Send the HTTP header
	//HTTP Status 200: OK
	//Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//Send the response body
	response.end(message);
}).listen(port);

//Console will print the message
console.log('Server running at http://127.0.0.1:' + port + '/');