angular.module('app.services', []).service('userService', ['$http', function($http) {

    this.underageUsers = function() {
        return $http.get('/users/underage')
    }

    this.adultUsers = function() {
        return $http.get('/users/adult')
    }
}])