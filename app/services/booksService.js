/**
 * Created by sumit on 2/10/14.
 */
(function() {

    angular.module('bookStore').service('booksService', function() {
            var user='Hi! Your name?';

            var books = [

                {
                    id: '001',
                    name: 'The Tempest',
                    author: 'Shakespeare',
                    price: 99.99,
                    orders: [
                        {
                            id: 001,
                            name: 'The Tempest',
                            sold: 39,
                            price: 99.99
                        }
                    ]
                },

                {
                    id: '002',
                    name: 'Plague',
                    author: 'Albert Camus',
                    price: 40.99,
                    orders: [
                        {
                            id: 002,
                            name: 'Plague',
                            sold: 50,
                            price: 40.99
                        }
                    ]
                },

                {
                    id: '003',
                    name: 'Three Musketeers',
                    author: 'Alexander Dumas',
                    price: 159.99,
                    orders: [
                        {
                            id: 003,
                            name: 'Three Musketeers',
                            sold: 65,
                            price: 159.99
                        }
                    ]
                },

                {
                    id: '004',
                    name: 'Ben Hur',
                    author: 'Lewis Wallace',
                    price: 99.99,
                    orders: [
                        {
                            id: 004,
                            name: 'Ben Hur',
                            sold: 53,
                            price: 99.99
                        }
                    ]
                },

                {
                    id: '005',
                    name: 'The Godfather',
                    author: 'Mario Puzo',
                    price: 55.49,
                    orders: [
                        {
                            id: 005,
                            name: 'The Godfather',
                            sold: 199,
                            price: 55.49
                        }
                    ]
                },

                {
                    id: '006',
                    name: 'Pride and Prejudice',
                    author: 'Jane Austen',
                    price: 69.79,
                    orders: [
                        {
                            id: 006,
                            name: 'Pride and Prejudice',
                            sold: 104,
                            price: 69.79
                        }
                    ]
                },

                {
                    id: '007',
                    name: 'Da Vinci Code',
                    author: 'Dan Brown',
                    price: 159.99,
                    orders: [
                        {
                            id: 007,
                            name: 'Da Vinci Code',
                            sold: 247,
                            price: 159.99
                        }
                    ]
                },

                {
                    id: '008',
                    name: 'Les Miserables',
                    author: 'Victor Hugo',
                    price: 120.10,
                    orders: [
                        {
                            id: 008,
                            name: 'Les Miserables',
                            sold: 78,
                            price: 120.10
                        }
                    ]
                },

                {
                    id: '009',
                    name: 'The Great Gatsby',
                    author: 'Scott Fitzgerald',
                    price: 99.99,
                    orders: [
                        {
                            id: 009,
                            name: 'The Great Gatsby',
                            sold: 85,
                            price: 99.99
                        }
                    ]
                },

                {
                    id: '010',
                    name: 'Frankenstein',
                    author: 'Mary Shelley',
                    price: 79.99,
                    orders: [
                        {
                            id: 010,
                            name: 'Frankenstein',
                            sold: 132,
                            price: 79.99
                        }
                    ]
                },
                {
                    id: '011',
                    name: 'Harry Potter',
                    author: 'J.K.Rowling',
                    price: 149.99,
                    orders: [
                        {
                            id: 011,
                            name: 'Harry Potter',
                            sold: 140,
                            price: 149.99
                        }
                    ]
                }
            ];

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