angular.module('app.controllers').controller('usersCtrl', ['$scope', 'userService', function($scope, userService) {
    $scope.adultUsers = function() {
        userService.adultUsers().success(function(data) {
            $scope.users = data;
        })
    },
    $scope.underageUsers = function() {
        userService.underageUsers().success(function(data) {
            $scope.users = data;
        })
    }
}])
