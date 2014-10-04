/**
 * Created by sumit on 4/10/14.
 */
(function() {
    angular.module('bookStore').controller('menuController', function($scope, $location) {
       $scope.addToLink = function(address) {
           $location.path(address);
       }
    });
}());
