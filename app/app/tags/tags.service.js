'use strict';

angular.
  module('wpaTags').
  factory('Tags', ['$resource','urlWordpress',
    function($resource,urlWordpress,Utilisateur,Categorie) {
      var myData;
      var obj = 
      { call: $resource(urlWordpress.url + '/tags/:id', {id:'@id'}, {
              query: {
                method: 'GET',
                isArray: true
              }
            }),
          getAll: function(){
            obj.call.query(function(tags){
                angular.forEach(tags, function(tag){
                  obj.datas.push(tag);
                })

              })
              return obj;
          },
          get: function(id){
            obj.call.get({id:id},function(data){
              obj.data.data = data;
            })
          },
          data : {},
          datas : []
        };

      return obj;
    }
  ]);
