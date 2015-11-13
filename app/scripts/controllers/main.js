'use strict';

/**
 * @ngdoc function
 * @name universalWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the universalWebAppApp
 */
angular.module('universalWebAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.user = {};
    $scope.demir = function (thing) {
    	$http.get('/api/users/' + thing).success(function(data) {
    		$scope.user = data;
    	});
    }
  });
