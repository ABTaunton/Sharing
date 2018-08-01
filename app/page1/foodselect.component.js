angular.
    module('foodselect').
    component('foodselect',{
        templateUrl: 'page1/foodselectsite.html',
        controller: ['$http', function FoodListController($http) {
            
            var self = this;
            $http.get('http://ec2-13-238-161-127.ap-southeast-2.compute.amazonaws.com:9000/food').then(function(response) {
                self.foodName = response.data;
            });

            }]
        });