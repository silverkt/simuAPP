"use strict";
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config('$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            //templateUrl : '../pages/home.html',
            template : 'shit'
            //controller : 'mainController'
        })
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller : 'aboutController'
        })
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller : 'contactController'
        });
});



scotchApp.controller('mainController', function ($scope) {
    $scope.message = "Everyonex come and see how good i look";
});


scotchApp.controller('aboutController', function ($scope) {
    $scope.message = "about";
});


scotchApp.controller('contactController', function ($scope) {
    $scope.message = "actafbout";
});