var fs = require('fs');
var data;
//同步读取
try {
  data = fs.readFileSync('./fileForRead.txt','utf-8');
  console.log(data,'文件内容');
} catch (error) {
  console.log('文件读取出错,',error)
}

//异步读取
fs.readFile('./fileForRead.txt','utf-8',function (error,data) {
  if(error)return console.log('文件读取出错',error)
  console.log(data,'文件内容')
})