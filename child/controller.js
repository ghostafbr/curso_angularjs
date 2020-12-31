angular.module('MyFirstApp', [])
  .run(function($rootScope) {
    $rootScope.nombre = 'Andrés Felipe Bolaños Ramírez';
  })
  .controller('FirstController', function ($scope) {
    $scope.nombre = 'AFBR';
    setTimeout(function() {
      $scope.$apply(function() {
        $scope.nombre=":3";
      });
    },1000);
  })
  .controller('ChildController',function($scope) {
    
  });
