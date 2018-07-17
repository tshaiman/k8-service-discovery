var express = require('express');
var app = express();


app.get('/', function (req, res) {

  var user_service = process.env.USER_SERVICE_HOST;  
  res.send('Hello World! .connecting to ' + user_service);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});