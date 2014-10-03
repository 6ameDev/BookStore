/**
 * Created by sumit on 2/10/14.
 */
(function() {

    angular.module('bookStore').controller('booksController', function ($scope, booksService) {
            $scope.books = [];
            $scope.username = booksService.getUsername();

            $scope.init = function() {
                $scope.books = booksService.getBooks();
            };

            $scope.init();
        }
    );

}());