app.directive('weaponWidget', function() { 
  return { 
    restrict: 'E',
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'weaponWidget.html' 
  }; 
});