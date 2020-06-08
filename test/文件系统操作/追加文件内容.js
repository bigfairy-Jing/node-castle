// fs.appendFile(file,data[,options],callback)
/** 
 * file：可以是文件路径，也可以是文件句柄。（还可以是buffer？）
 * data：要追加的内容。string或者buffer。
 * options
 *   encoding：编码，默认是`utf8`
 *   mode：默认是`0o666`
 *   flag：默认是`a`
 * */

 var fs = require('fs');
 fs.appendFile('./fileForRead.txt','mabi','utf8',function(err){
   if(err)throw err
   console.log('append成功')
 })

 