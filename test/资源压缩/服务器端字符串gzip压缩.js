var http = require('http');
var zlib = require('zlib');

var responseText = 'test testTack';

var server = http.createServer(function(req,res) {
  var acceptEncoding = req.headers['accept-encoding'];
  if(acceptEncoding.includes('gzip')){
    res.writeHead(200,{
      'content-encoding':'gzip'
    })
    res.end(zlib.gzipSync(responseText));
  }else{
    res.end(responseText)
  }
})

server.listen('3009')