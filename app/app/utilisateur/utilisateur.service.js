'use strict';

angular.
  module('wpaUtilisateur').
  factory('Utilisateur', ['$resource','urlWordpress',
    function($resource,urlWordpress) {
      var obj = 
      { call: $resource(urlWordpress.url + '/users/:id', {id:'@id'}, {
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
            return obj.call.get({"id":id},function(data){
              obj.data = data;
              return obj.data;
            })
          },
          data : {}
        };

      return obj;
    }
  ]);
