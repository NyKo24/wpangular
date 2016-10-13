'use strict';

angular.module('wpaHome')
.controller('homeController',['$scope','Article','Utilisateur', function($scope,Article,Utilisateur) {
    //$scope.articles = Article.query({per_page:1});
    $scope.articles = Article.getAll().datas;
    console.log(Article.datas);



}]);