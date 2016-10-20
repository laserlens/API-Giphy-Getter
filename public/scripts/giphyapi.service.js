angular.module('giphyGetter')
        .service('giphy', GiphyAPIService);

function GiphyAPIService($http) {

  var randomAPI = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  var searchAPI = 'http://api.giphy.com/v1/gifs/search?q=';
  var searchKey = '&api_key=dc6zaTOxFJmzC';

  this.getRandom = function() {
    return $http.get(randomAPI)
       .then(function(response) {
         console.log('response', response);
         return response.data.data.image_url;
       });//end of get
   };//end of getRandom

   this.getSearch = function (search) {
      return $http.get(searchAPI + search.replace(' ','+') + searchKey)
          .then(function(response){
          console.log('search response', response);
          return response.data.data;
       });//end of get
   };//end of getSearch


}//end of GiphyAPIService
