var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('User Service V.1 ! ');
});

app.listen(3030, function () {
  console.log('User Service listening on port 3030!');
});