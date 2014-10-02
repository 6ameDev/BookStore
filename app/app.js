/**
 * Created by sumit on 2/10/14.
 */

(function() {

    var app = angular.module('bookStore', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                controller: 'booksController',
                templateUrl: 'app/views/booksView.html'
            })
            .otherwise({ redirectTo: '/' });
    });

}());