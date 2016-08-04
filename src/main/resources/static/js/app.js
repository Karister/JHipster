angular.module('app', ['ui.router', 'app.services', 'app.controllers', 'app.directives'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: "/views/pages/home.html"
            })
            .state('about', {
                url: "/about",
                templateUrl: "/views/pages/about.html"
            })
    }])
    .config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
