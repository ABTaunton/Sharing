angular.
  module('winelist').
  component('winelist', {
    templateUrl: 'page2/winelistsite.html',
    controller: ['$scope', function wineListController($scope, messages) {
      
      $scope.selectedFood = foods.food;
      console.log($scope.selectedFood)
    }],

    Bindings: {
      foods: '='
    }
  });