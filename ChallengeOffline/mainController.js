app.controller('mainController', ['$scope', function ($scope) {

	$scope.money='800';

	$scope.user = user;

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
			$scope.user.skipWeapon(nextWeapon($scope.user));
		} catch(e) {
			alert(e.message, e.stack);
		}
	}

	$scope.user.initializeWeapons(weapons);
	$scope.user.currentWeapon = $scope.user.weapons[0];
}]);
