angular.
  module('winelist').
  component('winelist', {
    Bindings: { foods: '='},
    templateUrl: 'page2/winelistsite.html',
    controller: ['$http', '$scope', '$location', function wineListController($http, $scope, $location) {
      
      var self = this;
      var location = $location.url()
      $http.get('http://ec2-13-238-161-127.ap-southeast-2.compute.amazonaws.com:9000' + location)
          .then(function(response) {
          self.wineList = response.data;
      });
    }]
  });