const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const favorite_route = require('./routes/favorite_route');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/favorite_route', favorite_route);

app.use(function(req, res, next){
  console.log('Got a request!');
  next();
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});


app.listen(3000);
