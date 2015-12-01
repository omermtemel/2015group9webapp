'use strict';

/**
 * @ngdoc function
 * @name universalWebAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the universalWebAppApp
 */
angular.module('universalWebAppApp')
  .controller('LoginCtrl', function ($http, $scope) {
    $scope.login=function(){
      $http({
        method: 'POST',
        url: 'http://ec2-54-69-10-151.us-west-2.compute.amazonaws.com:8080/universal-access/oauth/token?grant_type=password&username='+this.usermail+'&password='+this.password,
        headers: { 'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='}
      }).then(function (response2) {
        $scope.login1Resp = response2;
      });
    };
  });
