angular.module('app.directives', []).directive('topHeader', function() {
    return {
        restrict: 'E',
        scope: {
            text: '@'
        },
        templateUrl: '/views/fragments/header.html'
    };
});