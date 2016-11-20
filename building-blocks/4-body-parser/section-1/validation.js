var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.post('/cities', parseUrlencoded, function(request, response) {
  var description = request.body.description;
  if (description.length > 4) {
    var city = createCity(request.body.name, description);
    response.status(201).json(city);
  } else {
    response.status(400).json('Invalid City');
  }
});

app.listen(3000);
