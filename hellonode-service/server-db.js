var express = require('express');
var app = express();
var usr_svc = process.env.USER_SERVICE_HOST;


app.get('/', function (req, res) {
  res.send('Hello World! .connecting to ' + usr_svc);
});

// server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Demp App listening at http://%s:%s', host, port);
});