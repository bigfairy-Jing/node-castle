//
// var http = require('http');
// // var server = http.createServer(()=>{
// //   res.end('ok');
// // })

// var server = http.createServer((req, res) => {
//   res.writeHead(200, 'ok', {
//     'Content-Type': 'text/plain'
//   });
//   //响应头增删改查
//   res.setHeader('Content-Type', 'text/plain');
//   res.removeHeader('Content-Type');
//   res.setHeader('Content-Type', 'text/plain');
//   res.getHeader('content-type');//这里的name做小写
//   res.end('test');
// });

// server.listen(3000);

//res.writeHead  和 res.setHeader



var http = require('http');
var server = http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html;charset=utf-8');
  res.write('hello');
  setTimeout(function(){
    res.write('world');
    res.end()
  },3000)
})
server.listen(3009)





