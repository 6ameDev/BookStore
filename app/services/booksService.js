/**
 * Created by sumit on 2/10/14.
 */
(function() {

    angular.module('bookStore').service('booksService', function($http) {
            var user='Hi! Your name?';

            var books = [];

            $http({method: 'GET', url: 'app/data.json'}).
            success(function(data, status, headers, config) {
                books = data;
            }).
            error(function(data, status, headers, config) {

            });

//            $http.get('app/data.json').success(function(data){
//                books = data;
//            });

            this.getBooks = function() {
                return books;
            };

            this.getOrders = function() {
                var orders = [];
                for(var i=0; i<books.length; i++) {
                    orders.push(books[i].orders[0]);
                }
                return orders;
            };

            this.getUsername = function() {
                return user;
            };

            this.pushUsername = function(username) {
                user = username;
            };
        }
    );

}());