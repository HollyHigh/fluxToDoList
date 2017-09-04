require('marko/express');
require('marko/node-require');

var express = require('express');
var compression = require('compression');

require('lasso').configure({
  "plugins": [
    "lasso-marko",
    "lasso-sass"
  ],
  outputDir: __dirname + 'static',
});

var app = express();
var http = require('http');
var page = require('./src/page/index.marko');
var port = 8080;
app.use(compression());
app.use(require('lasso/middleware').serveStatic());

app.get('/', function(req, res){
  page.render({}, res);
})

app.listen(port, function(err) {
  console.log('Listening on port %d', port);
})
