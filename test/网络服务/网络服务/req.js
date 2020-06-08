
// var http = require('http')
// var server = http.createServer(function(req,res){
//   console.log(req.headers)
//   res.end('ok')
// })
// server.listen(3000)

// http.get('http://127.0.0.1:3000',function(res){
//   console.log(res.statusCode)
// })

//-------------------------------------------------
// 获取HTTP版本、请求方法、请求地址、请求头部。
// var http = require('http');

// var server = http.createServer(function(req,res){
//    console.log('1、客户端请求url：' + req.url);
//    console.log('2、http版本：' + req.httpVersion);
//    console.log('3、http请求方法：' + req.method);
//    console.log('4、http请求头部' + JSON.stringify(req.headers));

//   res.end('帅帅帅')
// })
// server.listen(3000)


//------------------------------------------------
//获取get请求参数
// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');
// var server = http.createServer(function(req,res){
//   var urlObj = url.parse(req.url);
//   var query = urlObj.query;
//   var queryObj = querystring.parse(query);
//   console.log(JSON.stringify(queryObj), urlObj,query);
//   res.end('test')
// })

// server.listen(3000)

//获取post请求参数
// var http = require('http');
// var url = require('url');
// var querystring = require('querystring')
// var server = http.createServer(function(req,res){
//   var body = '';
//   req.on('data',function(thunk){
//     body += thunk;
//   })
//   req.on('end',function(){
//     console.log('post body is' + body)
//     res.end('ok')
//   })
// })
// server.listen(3000)


//客户端例子
// var http = require('http');
// var server = http.createServer(function(req,res) {
//   res.writeHead(200,{'content-type':'text/plain'})
//   res.end('from server')  
// })

// server.listen(3000)

// var client = http.get('http://127.0.0.1:3000', function (res) {
//   console.log('1、http版本：' + res.httpVersion);
//   console.log('2、返回状态码：' + res.statusCode);
//   console.log('3、返回状态描述信息：' + res.statusMessage);
//   console.log('4、返回正文：');
//   console.log(res)
//   res.pipe(process.stdout);
// });


// 事件abort和事件close 对比
/* 
abort 服务端的req的abort,close事件都会促发
请求正常完成时,服务端req的close事件不会促发
*/

// var http = require('http');

// var server = http.createServer(function(req,res) {
//    console.log('1、收到客户端请求: ' + req.url);

//    req.on('aborted', function () {
//      console.log('2、客户端请求aborted');
//    });

//    req.on('close', function () {
//      console.log('3、客户端请求close');
//    });
//    // res.end('ok')
// })

// server.listen('3000',()=>{
//    var client = http.get('http://127.0.0.1:3000/aborted');
//    setTimeout(function () {
//      client.abort(); // 故意延迟100ms，确保请求发出
//    }, 100);
// })



// var http = require('http');
// var server = http.createServer(function(req,res) {
//   console.log('1. 服务器收到客户端的请求');
//   res.flushHeaders();
//   res.setTimeout(100)
// })
// server.listen(3000,function() {
//   var client = http.get('http://127.0.0.1:3000/aborted',function(res){
//     console.log('2 客户端：收到服务端响应');
//     // res.pipe(process.stdout);
//     res.on('abort',()=>{console.log('3. 客户端abort促发')})
//     res.on('close',()=>{console.log('3. 客户端close促发')})
//   });
// })




var http = require('http');

var server = http.createServer(function (req, res) {

  console.log('服务端：收到客户端请求');

  req.destroy(new Error('测试destroy'));

  req.on('error', function (error) {
    console.log('服务端：req error: ' + error.message);
  });

  req.socket.on('error', function (error) {
    console.log('服务端：req socket error: ' + error.message);
  })
});

server.on('error', function (error) {
  console.log('服务端：server error: ' + error.message);
});

server.listen(3000, function () {

  var client = http.get('http://127.0.0.1:3000/aborted', function (res) {
    // do nothing
  });

  client.on('error', function (error) {
    console.log('客户端：client error触发！' + error.message);
  });
});