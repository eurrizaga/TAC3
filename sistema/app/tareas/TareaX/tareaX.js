'use strict';
angular.module('TareaX', ['ngRoute', 'ngSanitize'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/main', 
			{
				templateUrl: 'tasks/memory/xxxx.html',
				controller: 'TareaXController'
			}
		);
	}])
	.controller('TareaXController', function($scope, $controller, userData, subjectData){
		//$controller('ParentController', {$scope: $scope});
		$scope.stage = -1;
		$scope.blockKeyPress = true;
		$scope.htmlContent = "";
		
		
		// INIT
		$scope.initTask = function(){
			//Iniciar valores del Task. Basados en Parametros de usuario
		};
		$scope.initTask();
		
		
		$scope.nextStage = function(){
			//determina el stage de la aplicación para saber como continuar
			$scope.stage++;
			switch ($scope.stage){
				case 0: 
					// EJ..
					//$scope.showInstructions();
				break;
				case 1: 
					// EJ..
					//$scope.runTask();
				break;
				case 2: 
					// EJ..
					// $scope.processAnswers();
					// $scope.saveOutput();
					// $scope.endTask();
				
				break;
			}
		}
		
		$scope.runTask = function(){
		
		}
		
		
		
		// SHOW
		
		
		
		
		// RESPONSE
		
		
		$scope.keyPressed = function(keyEvent){
			if ($scope.blockKeyPress){
				//captura los resultados y los analiza
				switch (keyEvent.which){
					case 27: $scope.exitTask(); break;
					case 32: $scope.pause(); break;
					//........
				}
			
			}
			
		}
		
		$scope.saveAnswer = function(){
			//guarda los resultados para una futura evaluación
			//answers.push(newAnswer);
			
		}
		
		$scope.processAnswers = function(){
			//procesa respuestas para generar Resultado
			
		}
		$scope.saveOutput = function(){
			// Llama al factory DBHelper para almacenar lo capturado
			
		};
		
		$scope.showInstructions = function(){
			// Muestra instrucciones en la tarea
			$scope.htmlContent = "";
		};
		
		$scope.runTask = function(){
			
		
		};
		
		$scope.exitTask = function(){
			//Finaliza la tarea
		};
		
		$scope.pause = function(){
			alert('pause');
		};
		
		
		
		
	});