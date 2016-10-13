'use strict';

angular.
  module('wpaMedia').
  factory('Media', ['$resource','urlWordpress',
    function($resource,urlWordpress) {
      var obj = 
      { call: $resource(urlWordpress.url + '/media/:id', {id:'@id'}, {
              query: {
                method: 'GET',
                isArray: true
              }
            }),
          getAll: function(){
            obj.call.query(function(data){
                angular.forEach(data, function(val){
                  datas.push(val);
                })
            })
          },
          get: function(id){
            return obj.call.get({"id":id},function(data){
              obj.data = data;
              return obj.data;
            })
          },
          data : {},
          datas: []
        };

      return obj;
    }
  ]);
