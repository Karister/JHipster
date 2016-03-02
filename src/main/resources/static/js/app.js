angular.module('app', ['app.services', 'app.controllers'])

angular.module('app.services', []).service('mainService', function($http) {

    this.users1 = function() {
        return $http.get('/user1')
    }
    
    this.users2 = function() {
        return $http.get('/user2')
    }
})

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
    