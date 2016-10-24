# GOAL
- get a random Giphy or search for a Giphy by keyword
- save their favorite gifs along with a note about why they like that gif
- view a list of their favorite gifs w/notes

## Achieved

1. get a Giphy
  - by either the search page or random page
2. save favorite giphys
  - by clicking on the image its self.
  - this saves that images url and brings up a modal to add a comment
3. view a list of the favorites.
  - by clicking the favorites link
  - then clicking the view favorites button
    - this will load a carousel dynamicly filled with the images from the data base.
  - it will also display the length of the data base so the user can see number of favorites.
4. extra
  - created a delete button to remove a favorites
    - delete button sends the id of the image its attached to then querys the data base to delete the row with the matching id.
  - update button
    - currently not funtioning
## Strech Goals
  1. get update button working through a put request
  2. when user deletes last gif refresh the page to display nothing.
  3. make carousel next a previous buttons only display when the carousel displays
