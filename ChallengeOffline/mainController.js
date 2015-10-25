app.controller('mainController', ['$scope', function ($scope) {

	$scope.money='800';

	$scope.user = {
		weapons,
		usedWeapons : [],
		faction : "ct",
		money : 800,

		//config Rules for filtering
		filterUsed : true,
		filterFaction : true,
		filterPrice : true,
		filterType : [],
		filterCustom : [],
		
		currentWeapon : {},
		//: weapons[0],
		/*
		currentWeapon: {
			name: "usp/p2000",
			type: "pistol",
			factions: ["ct"],
			price: 200
		},
		*/

		initializeWeapons: function(weapons) {
			this.weapons = weapons;
			for(weapon in weapons) {
				weapons[weapon].used = false;
				weapons[weapon].included = true;
			}
			//$scope.nextWeapon();
		},

		getusedWeapons: function() {
			var usedWeapons = [];
			for(w in this.weapons) {
				if(this.weapons[w].used) {
					usedWeapons.push(this.weapons[w]);
				}
			}
			return usedWeapons;
		},

		getIncludedWeapons: function() {
			var includedWeapons = [];
			for(w in this.weapons) {
				if(this.weapons[w].included) {
					includedWeapons.push(this.weapons[w]);
				}
			}
			return includedWeapons;
		},

		//filters
		usedFilter: function(element) {
			return element.used;
		},

		includedFilter: function(element) {
			return element.included;
		},

		notIncludedFilter: function(element) {
			return !element.included;
		},

		//getter and setter 
		//TODO: not javascript get/set conform
		getWeapons: function() {
			return this.weapons;
		},

		getFilteredWeapons: function(filter) {
			return weapons.filter(filter);
		},

		setNextWeapon: function(weapon) {
			this.usedWeapons.push(weapon);
			weapon.used=true;
			this.currentWeapon.used=true;
			this.currentWeapon = weapon;
		},
		setNewCurrentWeapon: function(weapon) {
			arrays.remove(this.usedWeapons, this.currentWeapon);
			this.currentWeapon.used=false;
			this.setNextWeapon(weapon);
		}
	};

	$scope.nextWeapon = function() {
		//TODO: Insert propper error hierarchie, inherited from error.prototype? This seems sufficient though
		try {
			$scope.user.setNextWeapon(nextWeapon($scope.user));
		} catch(e) {
			alert(e.message, e.stack);
		}		
	}

	$scope.skip = function() {
		try {
			$scope.user.setNewCurrentWeapon(nextWeapon($scope.user));
		} catch(e) {
			alert(e.message, e.stack);
		}
	}

	$scope.user.initializeWeapons(weapons);
	$scope.user.currentWeapon = $scope.user.weapons[0];
	user = $scope.user;
}]);

//TODO: Debug code. remove!
var user;