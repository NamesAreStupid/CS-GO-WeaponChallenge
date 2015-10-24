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
		filterCustom : []
	};

	$scope.weapons = weapons;

}]);