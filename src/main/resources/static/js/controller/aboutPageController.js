angular.module('app.controllers').controller('aboutPageCtrl', ['$scope', function($scope) {
    $scope.pageTitle = 'About';
}])
angular.module('app.controllers').controller('usersCtrl', ['$scope', 'userService', function($scope, userService) {
    $scope.users1 = function() {
        userService.users1().success(function(data) {
            $scope.users = data;
        })
    },
    $scope.users2 = function() {
        userService.users2().success(function(data) {
            $scope.users = data;
        })
    }
}])
