/**
 * Created by sumit on 2/10/14.
 */
var booksController = function ($scope, booksService) {
    $scope.books = [];

    $scope.init = function() {
        $scope.books = booksService.getBooks();
    };
};

angular.module('bookStore').controller('booksController', booksController);