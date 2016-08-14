angular.module('app.services', []).service('userService', ['$http', function($http) {

    this.users1 = function() {
        return $http.get('/users1')
    }

    this.users2 = function() {
        return $http.get('/users2')
    }
}])