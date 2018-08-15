angular.
    module('foodselect').
    component('foodselect',{
        Bindings: { foods: '='},
        templateUrl: 'page1/foodselectsite.html',
        controller: ['$http','$scope', function FoodListController($http, $scope) {
            
            var self = this;
            $http.get('http://ec2-13-238-161-127.ap-southeast-2.compute.amazonaws.com:9000/food')
                .then(function(response) {
                self.foodName = response.data;
            });
            }],
        });