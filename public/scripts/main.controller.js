
app.controller('MainController', MainController);


function MainController(giphy) {
  var main = this;

  main.classHolder = 'marginHolder'

  //console.log('MainController Loaded');

  main.image = '';

  //var randyEl = document.getElementById('randyGiph');
  //randyEl.onclick = runRandom;

  //function runRandom() {
  main.randomGiphy = function() {
      main.classHolder = '';
      main.classRandom = 'random';
      giphy.getRandom().then(function(image) {
        main.image = image;
        console.log('random click',main.image);
      });
    };//end of randomGiphy
  //}

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  //var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  main.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }





//function on click event of picture takes user to orginal url
  main.imageButton = function () {
      window.open(main.image);
  };

  main.searchImages = [];

//function on click event of picture takes user to orginal url
  main.searchImagesURL = function (i) {
    window.open(main.searchImages[i].images.original.url);
  };

//  var searchEl = document.getElementById('searchGiph');
//  searchEl.onclick = runSearch;

//function runSearch() {
  main.searchGiphy = function () {
    main.class = 'carousel slide';
    //main.class2 = 'carousel-indicators';
    main.classSearch = 'random';
    giphy.getSearch(main.search).then(function (images) {
      main.searchImages = images;
      console.log('search main.image', main.searchImages);
    });
  };//end of searchGiphy
//}

}//end of MainController
