var express = require('express');
var pg = require('pg');
var app = express();

app.get('/food', function (req, res) {
  console.log('hit the food route');
  res.sendStatus(200);
});

app.listen(3000, function() {
  console.log('listenting on 3000');
});
