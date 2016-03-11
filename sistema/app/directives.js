(function(){
  var app = angular.module('directives', []);
  
  app.directive('navBar', function(){
    return{
      restrict: 'E',
      templateUrl: "app/template/navbar.html"
    };
  });
  
})();