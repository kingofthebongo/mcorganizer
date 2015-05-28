'use strict';

/**
 * @ngdoc function
 * @name mcorganizerApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the mcorganizerApp
 */
angular.module('mcorganizerApp')
  .controller('AdminCtrl', function ($scope,$http) {
     $http.get('data/imac1.xml').success(function (data) {
      $scope.imac1 = data.track;
    });
    $http.get('data/imac2.xml').success(function (data) {
      $scope.imac2 = data.track;
    });
    $http.get('data/imac3.xml').success(function (data) {
      $scope.imac3 = data.track;
    });

//    console.log('Scope : ', $scope);
  });
