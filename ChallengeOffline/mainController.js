app.controller('mainController', ['$scope', function ($scope) {
	$scope.money='800';

	$scope.user = {
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

		setNextWeapon: function(weapon) {
			this.usedWeapons.push(this.currentWeapon);
			this.currentWeapon = weapon;
		},
		setCurrentWeapon: function(weapon) {
			this.currentWeapon = weapon;
		}
	};
	$scope.weapons = weapons;

	/*
	$scope.nextWeapon = function() {
		console.log($scope.user);
	};
	*/

	$scope.nextWeapon = $scope.user.setNextWeapon(nextWeapon($scope.user));

}]);