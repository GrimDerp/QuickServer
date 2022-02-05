var http = require('http');
car fs = require('fs');
var url = require('url');

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
  
 }
}
//more later

          
          
          /* 
https://merciful-snickerdoodle.glitch.me

*/
          
         
          
     
