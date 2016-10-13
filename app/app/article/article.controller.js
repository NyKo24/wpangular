'use strict';

angular.module('wpaArticle')
.controller('articleController',['$scope','Article','$routeParams', function($scope,Article,$routeParams) {
    $scope.article = Article.getBySlug($routeParams.slug).data;

}]);