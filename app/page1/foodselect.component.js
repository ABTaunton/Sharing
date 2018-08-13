angular.
    module('foodselect').
    component('foodselect',{
        templateUrl: 'page1/foodselectsite.html',
        controller: ['$http','$scope', function FoodListController($http, $scope, messages) {
            
            var self = this;
            $http.get('http://ec2-13-238-161-127.ap-southeast-2.compute.amazonaws.com:9000/food')
                .then(function(response) {
                self.foodName = response.data;
                console.log(response.data);
            });
            
            $scope.edit = function(foods) {
                $scope.selectedFood = foods.food;
                alert(foods.food);
            };
            }],
        
        Bindings: {
            foods: '='
        }
        
        });