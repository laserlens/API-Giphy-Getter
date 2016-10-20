app.controller('MainController', MainController);

function MainController(giphy) {
  var main = this;

  console.log('MainController Loaded');

  main.randomGiphy = function() {
    giphy.getRandom().then(function(image) {
      main.image = image;
      console.log(main.image);
    });
  };//end of randomGiphy

  main.searchImages = [];

  main.searchGiphy = function () {
    giphy.getSearch(main.search).then(function (images) {
      main.searchImages = images;
      console.log('search main.image', main.searchImages);
    });
  };//end of searchGiphy


}//end of MainController
