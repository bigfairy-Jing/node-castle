var http = require('http');
var server = http.createServer(function(serverReq,serverRes){
  var url = serverReq.url;
  serverRes.end('您访问的地址是' + url,'utf8')
})

server.listen(3000);

var client = http.get('http://127.0.0.1:3000',function(clientRes){
  clientRes.pipe(process.stdout)
})