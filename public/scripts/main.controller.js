app.controller('MainController', MainController);

function MainController(giphy) {
  var main = this;

  main.classHolder = 'marginHolder'

  console.log('MainController Loaded');

  main.imageButton = function () {
    console.log('the image is a button');
    giphy.getRandom().then(function(image) {
      main.image = image;
      window.open(main.image);
    });
  };

  main.randomGiphy = function() {
    main.classHolder = '';
    main.classRandom = 'random';
    giphy.getRandom().then(function(image) {
      main.image = image;
      main.link = image;
      console.log(main.image);
    });
  };//end of randomGiphy

  main.searchImages = [];

  main.searchGiphy = function () {
    main.classSearch = 'random';
    giphy.getSearch(main.search).then(function (images) {
      main.searchImages = images;
      console.log('search main.image', main.searchImages);
    });
  };//end of searchGiphy


}//end of MainController
