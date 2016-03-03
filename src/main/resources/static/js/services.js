angular.module('app.services', []).service('mainService', function($http) {

    this.users1 = function() {
        return $http.get('/user1')
    }

    this.users2 = function() {
        return $http.get('/user2')
    }
})