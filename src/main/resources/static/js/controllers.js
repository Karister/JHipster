angular.module('app.controllers', []).controller('mainCtrl', function($scope, mainService) {

    $scope.users1 = function() {
        mainService.users1().success(function(data) {
            $scope.users = data;
        })
    }

    $scope.users2 = function() {
        mainService.users2().success(function(data) {
            $scope.users = data;
        })
    }
})