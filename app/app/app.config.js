'use strict';

app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/article/:slug', {
          templateUrl: 'app/article/article.html',
          controller: "articleController"
        }).
        when('/', {
          templateUrl: 'app/home/home.html',
          controller: "homeController"
        }).
        otherwise('/');
    }
  ]);
