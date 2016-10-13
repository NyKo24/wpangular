'use strict';

angular.
  module('wpaArticle').
  factory('Article', ['$resource','urlWordpress','Utilisateur','Categorie','Tags','Media',
    function($resource,urlWordpress,Utilisateur,Categorie,Tags,Media) {
      var myData;
      var obj = 
      { call: $resource(urlWordpress.url + '/posts/:id', {}, {
              query: {
                method: 'GET',
                isArray: true
              }
            }),
          getAll: function(){
            obj.call.query(function(articles){
                angular.forEach(articles, function(art){
                  art.author = Utilisateur.get(art.author);
                  art.featured_media = Media.get(art.featured_media);

                  var cat = [];
                  var oldCat = art.categories.slice(0);
                  for (var i = 0; i < oldCat.length; i++) {
                    Categorie.call.get({id:oldCat[i]},function(val){
                      cat.push(val);
                    });
                    art.categories.splice(i,1);
                  }

                  var tags = [];
                  var oldTags = art.tags.slice(0);

                  for (var i = 0; i < oldTags.length; i++) {
                    Tags.call.get({id:oldTags[i]},function(val){
                      tags.push(val);
                    });
                    art.tags.splice(i,1);
                  }

                  art.tags = tags;
                  art.categories = cat;
                  obj.datas.push(art);
                })

              })
              return obj;
          },
          get: function(slug){
            obj.call.get({slug:slug},function(data){

              data.author = Utilisateur.get(data.author);
              data.featured_media = Media.get(data.featured_media);

              var cat = [];
              var oldCat = data.categories.slice(0);
              for (var i = 0; i < oldCat.length; i++) {
                Categorie.call.get({id:oldCat[i]},function(val){
                  cat.push(val);
                });
                data.categories.splice(i,1);
              }

              var tags = [];
              var oldTags = data.tags.slice(0);
              for (var i = 0; i < oldTags.length; i++) {
                Tags.call.get({id:oldTags[i]},function(val){
                  tags.push(val);
                });
                data.tags.splice(i,1);
              }
              data.tags = tags;
              data.categories = cat;
              obj.data.data = data;
             
            })
             return obj;
          },
          getBySlug : function(slug){
            obj.call.query({slug:slug},function(data){
              data[0].author = Utilisateur.get(data[0].author);
              data[0].featured_media = Media.get(data[0].featured_media);

              var cat = [];
              var oldCat = data[0].categories.slice(0);
              for (var i = 0; i < oldCat.length; i++) {
                Categorie.call.get({id:oldCat[i]},function(val){
                  cat.push(val);
                });
                data[0].categories.splice(i,1);
              }

              var tags = [];
              var oldTags = data[0].tags.slice(0);
              for (var i = 0; i < oldTags.length; i++) {
                Tags.call.get({id:oldTags[i]},function(val){
                  tags.push(val);
                });
                data[0].tags.splice(i,1);
              }
              data[0].tags = tags;
              data[0].categories = cat;
              obj.data.data = data[0];
            })
          },
          data : {},
          datas : []
        };

      return obj;
    }
  ]);
