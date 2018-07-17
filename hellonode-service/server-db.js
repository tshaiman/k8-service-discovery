var express = require('express');
const request = require('request');

var app = express();
var usr_svc = process.env.USER_SERVICE_HOST;


app.get('/', function (req, result) {
  console.log("about to send a request to the user service");
  request("http://" + usr_svc,  (err, res, body) => {
    if (err) { 
      console.log("an error has occured " + err)
      return result.send("err"); 
    }
    console.log("the body is " + res.body)
    result.send(res.body);
  });
});

// server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Demo App V3 listening at http://%s:%s', host, port);
});