//first node page to load in browser

//reference the http library that comes with node

var http = require('http');

//start an http server asynchronously
http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('<h1>our first node page</h1>');
  response.end();
}).listen(3000);

//display message to console

console.log('server running on port 3000');
