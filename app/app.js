/**
 * Created by sumit on 2/10/14.
 */

(function() {

    var app = angular.module('bookStore', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                controller: 'homeController',
                templateUrl: 'app/views/homeView.html'
            })
            .when('/books',
            {
                controller: 'booksController',
                templateUrl: 'app/views/booksView.html'
            })
            .when('/authors',
            {
                controller: 'booksController',
                templateUrl: 'app/views/authorsView.html'
            })
            .when('/orders',
            {
                controller: 'ordersController',
                templateUrl: 'app/views/ordersView.html'
            })
            .otherwise({ redirectTo: '/' });
    });

    app.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });

}());