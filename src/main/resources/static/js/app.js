angular.module('app', ['ngRoute', 'app.services', 'app.controllers', 'app.directives']).config(function($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl : '/home',
            controller  : 'mainCtrl'
        })
        .when('/', {
            templateUrl : '/home',
            controller  : 'mainCtrl'
    });
});
