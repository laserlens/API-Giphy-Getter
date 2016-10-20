
app.controller('MainController', MainController);

function MainController(giphy) {
  var main = this;

  main.classHolder = 'marginHolder'

  //console.log('MainController Loaded');

  main.image = '';

  main.randomGiphy = function() {
    main.classHolder = '';
    main.classRandom = 'random';
    giphy.getRandom().then(function(image) {
      main.image = image;
      console.log('random click',main.image);
    });
  };//end of randomGiphy

//function on click event of picture takes to orginal url
  main.imageButton = function () {
      window.open(main.image);
  };

  main.searchImages = [];

//function on click event of picture takes to orginal url
  main.searchImagesURL = function (i) {
    window.open(main.searchImages[i].images.original.url);
  };

  main.searchGiphy = function () {
    main.classSearch = 'random';
    giphy.getSearch(main.search).then(function (images) {
      main.searchImages = images;
      console.log('search main.image', main.searchImages);
    });
  };//end of searchGiphy


}//end of MainController
