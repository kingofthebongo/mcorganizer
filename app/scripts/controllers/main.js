'use strict';

/**
 * @ngdoc function
 * @name mcorganizerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mcorganizerApp
 */
angular
  .module('mcorganizerApp')
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('xmlHttpInterceptor');
  })
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('data/IMAC1.xml').success(function (data) {
      $scope.imac1 = data.track;
    });
    $http.get('data/IMAC2.xml').success(function (data) {
      $scope.imac2 = data.track;
    });
    $http.get('data/IMAC3.xml').success(function (data) {
      $scope.imac3 = data.track;
    });

    console.log('Scope : ', $scope);

  });
