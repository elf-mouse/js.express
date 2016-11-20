var express = require('express');
var app = express();

app.use(express.static('public'));

app.get(function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/cities', function(req, res) {
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});

app.listen(3001);
