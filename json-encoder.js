var http = require('http');
var fs = require('fs');
var url = require('url');
//allocate http, filesystem, & url objects

http.createServer(function(req, res) {
 if (req.method == 'POST') {
  console.log('POST');
   var body = '';
   req.on('data', function(data) {
    body += data;
   });
   req.on('end', function() {
    res.writeHead(200,
       {'Content-Type': 'application/json'});
    res.end("null");
   });
 } 
  elseif (req.method == 'GET')
 {
  console.log('GET');
  var urlParts = url.parse(req.url);
  if (urlParts.pathname == "/favicon.ico")
  {
   res.end("");
   return;
  }
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  var html = fs.readFileSync('./public' + urlParts.pathname);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
  return;
  
 }
}) .listen(1337, 'localhost');
console.log('Server running at http://127.0.0.1:1337');
//register http server to listen on port 1337 lul

          
          
          /* 
https://merciful-snickerdoodle.glitch.me

*/
          
         
          
     
