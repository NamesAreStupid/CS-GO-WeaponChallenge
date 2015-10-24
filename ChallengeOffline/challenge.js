/*
var user = {
	usedWeapons : [],
	faction : "ct",
	money : 16000,

	//config Rules for filtering
	filterUsed : true,
	filterFaction : true,
	filterPrice : true,
	filterType : [],
	filterCustom : []
};
*/

var weaponLeft = function(weaponList, usedList) {
	var weaponLeft = false;
	var newWeaponList = weaponList.slice();
	for(i in usedList) {
		newWeaponList.usedList[i]
	}

};

/*
//Define Rules as filters
var filterUsed = function(element) {
		return !(arrays.inArray(user.usedWeapons, element));
	};
var filterFaction = function(element) {
		return (element.factions.indexOf(user.faction) >= 0);
	};
var filterPrice = function(element) {
		return (element.price <= user.money);
	};
var filterType = function(element) {
		return (arrays.inArray(user.filterType, element.type));
	};
var filterCustom = function(element) {
		return (arrays.inArray(user.filterCustom, element.name));
	};

//Use filters to rule out weapons
var filterWeapons = function(weapons, user) {
	var weaponsArray =  weapons.slice(0);

	if(user.filterUsed === true) {
		weaponsArray = weaponsArray.filter(filterUsed);
	}
	if(user.filterFaction) {
		weaponsArray = weaponsArray.filter(filterFaction);
	}
	if(user.filterPrice) {
		weaponsArray = weaponsArray.filter(filterPrice);
	}
	if(user.filterType != undefined && user.filterType.length > 0) {
		weaponsArray = weaponsArray.filter(filterType);
	}
	if(user.filterCustom != undefined && user.filterCustom.length > 0) {
		weaponsArray = weaponsArray.filter(filterCustom);
	}

	return weaponsArray;
};
*/

//Use filters to rule out weapons
var filterWeapons = function(weapons, user) {
	var weaponsArray =  weapons.slice(0);

	if(user.filterUsed === true) {
		weaponsArray = weaponsArray.filter(function(element) {
			return !(arrays.inArray(user.usedWeapons, element))
		});
	}
	if(user.filterFaction) {
		weaponsArray = weaponsArray.filter(function(element) {
			return (element.factions.indexOf(user.faction) >= 0);
		});
	}
	if(user.filterPrice) {
		weaponsArray = weaponsArray.filter(function(element) {
			return (element.price <= user.money);
		});
	}
	if(user.filterType != undefined && user.filterType.length > 0) {
		weaponsArray = weaponsArray.filter(function(element) {
			return (arrays.inArray(user.filterType, element.type));
		});
	}
	if(user.filterCustom != undefined && user.filterCustom.length > 0) {
		weaponsArray = weaponsArray.filter(function(element) {
			return (arrays.inArray(user.filterCustom, element.name));
		});
	}

	return weaponsArray;
};

var nextWeapon = function(user) {
		console.log(user);
	var tmpWeapon = {
		name: "",
		type: "",
		factions: [],
		price: ""
	};
	//if the user used all weapons the game is over!
	if(user.usedWeapons.length != weapons.length) {	
		var filteredWeapons = filterWeapons(weapons, user);

		if(filteredWeapons.length > 0) {
			var weapon = filteredWeapons[parseInt(Math.random()*filteredWeapons.length)];
			user.setNextWeapon(weapon);
			//message = weapon.name +"\n"+ weapon.type +"\n"+ weapon.factions +"\n"+ weapon.price + "$";
		} else {
			tmpWeapon.name = "All other weapons ruled out!"
			user.setNextWeapon(tmpWeapon);
		}
	} else {
		tmpWeapon.name = "All Weapons used! You beat the GAMEEEEEE!!!!!11";
		user.setNextWeapon(tmpWeapon);
	}
	return weapon;
};

