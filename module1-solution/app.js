(function() {
    'use strict';

    angular.module('lunchApp', [])
        .controller('lunchMenuController', lunchMenuController);

    lunchMenuController.$inject = ['$scope'];

    function lunchMenuController($scope) {
        $scope.dishes = "";
        $scope.dishesLength = 0;
        $scope.checkDishes = function() {
            countDishes($scope.dishes);
        };


        function countDishes(string) {

            if (string.length === 0) {
                $scope.message = "Please enter data first";
            } else {
                var stringArray = string.split(",");

                if (stringArray.length <= 3) {
                    $scope.message = "Enjoy!"
                } else {
                    $scope.message = "Too much!"
                }
            };

        }
    };
})();