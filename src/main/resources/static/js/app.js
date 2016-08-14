angular.module('app', ['ui.router', 'app.services', 'app.controllers', 'app.directives'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "/views/pages/home.html",
                controller: "homePageCtrl"
            })
            .state('about', {
                url: "/about",
                templateUrl: "/views/pages/about.html",
                controller: "aboutPageCtrl"
            })
    }])
    .config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
