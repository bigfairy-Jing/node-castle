var fs = require('fs');
var readStream = fs.createReadStream('./timg.jpg');

readStream.on('data',function(chunk){
  console.log('读取数据',chunk)
})
.on('error', function (error) {
  console.log('读取出错了', error)
})
.on('end', function (end) {
  console.log('没有数据了', end)
})
.on('close',function(close){
  console.log('已经关闭了',close)
})

