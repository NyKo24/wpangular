'use strict';

angular.
  module('wpaCategorie').
  factory('Categorie', ['$resource','urlWordpress','Utilisateur',
    function($resource,urlWordpress,Utilisateur) {
      var myData;
      var obj = 
      { call: $resource(urlWordpress.url + '/categories/:id', {}, {
              query: {
                method: 'GET',
                isArray: true
              }
            }),
          getAll: function(){
            obj.call.query(function(data){
                obj.data.toto = "tyty";
            })
          },
          get: function(id){
            obj.call.get({id:id},function(data){
              obj.data.data = data;
            })
          },
          data : {}
        };

      return obj;
    }
  ]);
