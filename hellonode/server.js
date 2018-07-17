var express = require('express');
var fs = require('fs');
var app = express();
var userFile = '/etc/creds/username'
var passFile = '/etc/creds/password'

app.get('/', function (req, res) {
  var user_content = fs.readFileSync(userFile)
  var pass_content = fs.readFileSync(passFile) 
  
  res.send('Hello World! ' + user_content + '  : ' + pass_content);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});