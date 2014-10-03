/**
 * Created by sumit on 3/10/14.
 */
(function() {
    angular.module('bookStore').controller('ordersController', function($scope, booksService) {

        $scope.orders = [];
        $scope.username = booksService.getUsername();

        function init() {
            $scope.orders = booksService.getOrders();
        };

        init();
    });
}());