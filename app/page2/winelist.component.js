angular.
  module('winelist').
  component('winelist', {
    templateUrl: 'page2/winelistsite.html',
    controller: ['$routeParams',
      function WineListController($routeParams) {
        this.phoneId = $routeParams.phoneId;
      }
    ]
  });