'use strict';
angular.module('myApp.Main', ['ngRoute', 'ngSanitize', 'directives'])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/app/main', 
			{
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl'
			}
		);
	}])
	.controller('MainCtrl', function($scope){
		
	});