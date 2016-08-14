angular.module('app.controllers', []).controller('mainCtrl', ['$scope', 'mainService', function($scope, mainService) {

    $scope.users1 = function() {
        mainService.users1().success(function(data) {
            $scope.users = data;
        })
    },

    $scope.users2 = function() {
        mainService.users2().success(function(data) {
            $scope.users = data;
        })
    }
}])
angular.module('app.controllers').controller('homePageCtrl', ['$scope', function($scope) {
    $scope.pageTitle = 'Home';
}])
angular.module('app.controllers').controller('aboutPageCtrl', ['$scope', function($scope) {
    $scope.pageTitle = 'About';
}])