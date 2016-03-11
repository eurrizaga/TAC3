'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute','myApp.Main', 'myApp.Sujeto'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/app/main'});
  
}])

.controller('IndexCtrl', function($scope){
	
});