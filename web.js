var fs = require('fs')
var buf = require('buffer')

var infile = 'index.html'

var index_text = fs.readFileSync(infile).toString()

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
