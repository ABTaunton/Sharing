angular.
    module('foodselect').
    component('foodselect',{
        templateUrl: 'page1/foodselectsite.html',
        controller: ['$http', function FoodListController($http) {
            
            var self = this;
            $http.get('//localhost:9000/food').then(function(response) {
                self.foodName = response.data;
            });
          }
        ]
        });