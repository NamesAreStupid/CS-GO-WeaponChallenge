
var weaponLeft = function(weaponList, usedList) {
	var weaponLeft = false;
	var newWeaponList = weaponList.slice();
	for(i in usedList) {
		newWeaponList.usedList[i]
	}

};

//Use filters to rule out weapons
var filterWeapons = function(weapons, user) {
	var weaponsArray =  weapons.slice(0);

	//filter not included
	weaponsArray = weaponsArray.filter(function(element) {
		return element.included;
	});

	if(user.filterUsed === true) {
		weaponsArray = weaponsArray.filter(function(element) {
			//return !(arrays.inArray(this.user.usedWeapons, element))
			return !element.used;
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
	//if the user used all weapons the game is over!
	if(user.getUsedWeapons.length != user.weapons.length) {	
		var filteredWeapons = filterWeapons(user.weapons, user);

		if(filteredWeapons.length > 0) {
			var weapon = filteredWeapons[parseInt(Math.random()*filteredWeapons.length)];
			//user.setNextWeapon(weapon);
			//message = weapon.name +"\n"+ weapon.type +"\n"+ weapon.factions +"\n"+ weapon.price + "$";
		} else {
			throw {name: "ruledOut", message: "All other weapons ruled out!"}
			//tmpWeapon.name = "All other weapons ruled out!"
			//user.setNextWeapon(tmpWeapon);
		}
	} else {
		throw {name: "allUsed", message: "All Weapons used! You beat the GAMEEEEEE!!!!!11"}
		//tmpWeapon.name = "All Weapons used! You beat the GAMEEEEEE!!!!!11";
		//user.setNextWeapon(tmpWeapon);
	}
	return weapon;
};

