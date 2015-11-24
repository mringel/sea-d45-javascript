require('angular/angular');
var angular = window.angular;

var bearApp = angular.module('bearstream', []);
bearApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hello World, Also Bears and Salmons';

  $scope.alertGreeting = function() {
    alert($scope.greeting);
  };
}]);
