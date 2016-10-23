angular.module('giphyGetter')
        .config(function ($routeProvider, $locationProvider) {
          $routeProvider.when('/favorites',{
            templateUrl: 'views/favorites.html',
            controller: 'MainController as main'
          }).when('/random',{
            templateUrl: 'views/random.html',
            controller: 'MainController as main',
          }).when('/search',{
            templateUrl: 'views/search.html',
            controller: 'MainController as main'
          });//end of whens
          //lets us use normal looking links i.e. /home
          //to use html5mode have to use <base href="/" /> in index
          $locationProvider.html5Mode(true);
        });//end of module
