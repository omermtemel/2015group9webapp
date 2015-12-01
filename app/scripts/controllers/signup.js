'use strict';

/**
 * @ngdoc function
 * @name universalWebAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the universalWebAppApp
 */
angular.module('universalWebAppApp')
  .run(function ($http) {
    $http.defaults.headers.common.Authorization = 'Basic Y2xpZW50OnNlY3JldA==';
  })
  .controller('SignupCtrl', function ($http, $scope, $rootScope) {

    $scope.register = function(){
      $http.post('http://ec2-54-69-10-151.us-west-2.compute.amazonaws.com:8080/universal-access/oauth/token?grant_type=client_credentials').success(function (data) {
        $rootScope.bearer = data.access_token;
        $http.defaults.headers.common.Authorization = 'Bearer '+ $rootScope.bearer;

        $http({
          method: 'POST',
          url: 'http://ec2-54-69-10-151.us-west-2.compute.amazonaws.com:8080/universal-access/rest/users',
          data: { 'email': $scope.registerMail , 'password': $scope.registerPassword, 'firstName' : $scope.registerFName , 'lastName' : $scope.registerLName}
        }).then(function (responseReg2) {

        });
      });
    };
  });
