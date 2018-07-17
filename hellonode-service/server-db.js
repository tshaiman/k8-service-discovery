var express = require('express');
const request = require('request');

var app = express();
var usr_svc = process.env.USER_SERVICE_HOST;


app.get('/', function (req, result) {
  //res.send('Hello World! .connecting to ' + usr_svc);

  request(usr_svc,  (err, res, body) => {
    if (err) { 
      return result.send(err); 
    }
    result.send(body);
  });
});

// server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Demp App listening at http://%s:%s', host, port);
});