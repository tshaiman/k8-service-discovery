var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('User Service V.1 ! ');
});

// server
var server = app.listen(3030, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('User Service App listening at http://%s:%s', host, port);
});