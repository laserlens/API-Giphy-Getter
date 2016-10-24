
app.controller('MainController', MainController);

var myImage = '';

function MainController(giphy, $http) {
  var main = this;
  main.classHolder = 'marginHolder'
  //array to hold image data when searched
  main.searchImages = [];
  //array to hold favoritesData
  main.favoritesData = [];
  //string to hold coment entered in input field
  main.newComent = '';


//funtion to trigger on ng-click of random button
  main.randomGiphy = function() {
      main.classHolder = '';
      main.classRandom = 'random';
      main.guideText = 'Click Image Add to favorites';
      giphy.getRandom().then(function(image) {
        main.image = image;
        console.log('random click',main.image);
      });
    };//end of randomGiphy


  // modal controls
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal
  //modal funtion for search
  main.onclickS = function(i) {
      modal.style.display = "block";
      myImage = main.searchImages[i].images.original.url;
      console.log('whats the imageUrl', myImage);

  }
  //modal funtion for random
  main.onclickR = function() {
      modal.style.display = "block";
      myImage = main.image;
      console.log('whats the object myImage',myImage);
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
  }//end of modal controls


//funtion for ng-click event on search button
  main.searchGiphy = function () {
    main.class = 'carousel slide';
    main.classSearch = 'random';
    main.guideText = 'Click Image Add to favorites';
    giphy.getSearch(main.search).then(function (images) {
      main.searchImages = images;
      console.log('search main.image', main.searchImages);
    });
  };//end of searchGiphy


//funtion for ng-click even on view favorites button
main.viewFavorites = function() {
  main.class = 'carousel slide';
  $http({
    method: 'GET',
    url: '/favorite_route'
  }).then(function successCallback(response) {
      main.favoritesData = response.data;
      main.count = response.data.length;
      console.log('whats the total count of data', main.count);
    }, function errorCallback(response) {
      console.log('Error in Call back');
    });//end of get
};//end of viewFavorites



//funtion for ng-click event add to favorites
main.postFavorites = function () {
  main.newImage = myImage;
  main.data = {coments: main.newComent,
                imageurl: main.newImage};
  $http.post("/favorite_route", main.data).success(function(data, status) {
      });//end of post
  modal.style.display = "none";
};//end of postFavorites

// funtion for ng-click event on delete button
main.deleteFavorite = function ($index) {
  main.data = main.favoritesData[$index].id;
  $http.delete("/favorite_route/" + main.data).success(function(data, status) {
  });//end of delete
  main.viewFavorites();
};//end of postFavorites



//fix carousel bug
main.viewLoaded=function(){
 $('.carousel ').carousel()
}
//more fix carousel bug
main.slide = function (dir) {
  $('#searchCarousel').carousel(dir);
}
}//end of MainController
