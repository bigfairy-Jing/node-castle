
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

