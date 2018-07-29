angular.
    module('foodselect').
    component('foodselect',{
        templateUrl: 'page1/foodselectsite.html',
        controller: ['$http', function FoodListController($http) {
            
            var self = this;
            $http.get('/foods/foods.json').then(function(response) {
                self.food = response.data;
            });
          }
        ]
        });