/**
 * Created by sumit on 3/10/14.
 */
(function() {
    angular.module('bookStore').controller('homeController', function($scope, booksService) {

        $scope.hidden = true;
        $scope.username = booksService.getUsername();

        $scope.hideEditor = function() {
            $scope.hidden = true;
            booksService.pushUsername($scope.username);
        }

        $scope.toggleEditor = function() {
            $scope.hidden = !$scope.hidden;

            if(!$scope.hidden)
                $scope.username = '';
            else
                booksService.pushUsername($scope.username);
        }

    });
}());