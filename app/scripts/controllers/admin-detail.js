'use strict';

/**
 * @ngdoc function
 * @name mcorganizerApp.controller:AdminDetailCtrl
 * @description
 * # AdminDetailCtrl
 * Controller of the mcorganizerApp
 */
angular.module('mcorganizerApp')

  .controller('AdminDetailCtrl', function ($http, $route, $scope, ModalService, x2js, $q, $cordovaFile ) {

   var param = $route.current.params.imacId;
   //console.log(param);
   $http.get('data/'+param+'.xml')
     .success(function(data){
     $scope.imac = data.track;
       console.log(data.track);
     })
     .error(function(){
       console.log('Impossible');
     });


      console.log($scope.imac);


      $scope.$watch('imac', function () {
        console.log('$scope changed');

        var xmlDocStr = x2js.json2xml_str($scope.imac);
        $cordovaFile.writeFile( 'data/'+param+'.xml', xmlDocStr, {'append':false} ).then( function() {
          console.log('Okay');
        }, function() {
          console.log('Failed');
        });

      }, true);



    $scope.show = function(cp) {
      var course = cp;
      ModalService.showModal({
        templateUrl: 'views/modal.html',
        controller: 'ModalCtlr',
        inputs:{
          course: course
        }
      }).then(function(modal) {
        modal.element.modal(course);
        modal.close.then(function() {
          //$scope.message = "You said " + result;
        });
      });

    };

  })
  .controller('ModalCtlr', function($http, $route, $scope, course, close) {


    var param = $route.current.params.imacId;
    //console.log(param);
    $http.get('data/'+param+'.xml')
      .success(function(data){
        $scope.imac = data.track;
      })
      .error(function(){
        console.log('Impossible');
      });


    $scope.course = course;


    $scope.close = function (result) {
      if(result === 'save'){
        console.log('Sauvegarde de l\'enseignement');
      //  console.log($scope.course);
      }
      close(result, 300);
    };

  });



