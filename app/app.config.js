angular.
  module('WineFinder').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/foods', {
          template: '<foodselect></foodselect>'
        }).
        when('/foods/winelist', {
          template: '<winelist></winelist>'
        }).
        otherwise('/foods');
    }
  ]);