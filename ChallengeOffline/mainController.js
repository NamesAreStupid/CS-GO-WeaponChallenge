app.controller('mainController', ['$scope', function ($scope) {
	$scope.money='800';

	$scope.user = {
		weapons;
		usedWeapons : [],
		faction : "ct",
		money : 800,

		//config Rules for filtering
		filterUsed : true,
		filterFaction : true,
		filterPrice : true,
		filterType : [],
		filterCustom : [],

		currentWeapon: {
			name: "usp/p2000",
			type: "pistol",
			factions: ["ct"],
			price: 200
		},

		getIncludedWeapons: function() {

		},

		setNextWeapon: function(weapon) {
			this.usedWeapons.push(weapon);
			this.currentWeapon = weapon;
		},
		setNewCurrentWeapon: function(weapon) {
			arrays.remove(this.usedWeapons, this.currentWeapon);
			this.setNextWeapon(weapon);
		}
	};
	$scope.weapons = weapons;

	$scope.nextWeapon = function() {
		//TODO: Insert propper error hierarchie, inherited from error.prototype? This seems sufficient though
		try {
			$scope.user.setNextWeapon(nextWeapon($scope.user));
		} catch(e) {
			alert(e.message);
		}		
	}

	$scope.skip = function() {
		try {
			$scope.user.setNewCurrentWeapon(nextWeapon($scope.user));
		} catch(e) {
			alert(e.message);
		}	
	}

}]);