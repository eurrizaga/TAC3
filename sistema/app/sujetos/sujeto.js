'use strict';
angular.module('myApp.Sujeto', ['ngRoute','directives', 'services'])

  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/app/sujetos/', 
      {
        templateUrl: 'app/sujetos/sujeto.html',
        controller: 'SujetoCtrl'
      }
    );
  }])
  .controller('SujetoCtrl', function($scope){
    $scope.isSelected = false;
    $scope.selectedSubject = null;
    $scope.addNew = function(){
      $scope.isSelected = true;
    }
    $scope.edit = function(id){
      
    }
    $scope.goBack = function(){
      $scope.isSelected = false;
    }
    $scope.saveChanges = function(valid){

    }
    $scope.addNewBook = function(bookData) {
      $params = $.param({
        "name": bookData.name,
        "price": bookData.price,
        "author_id": bookData.authorId
      })
      sharedBooks.saveBooks($params);
    }
    
  });