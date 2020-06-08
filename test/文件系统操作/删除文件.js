var fs = require('fs');

// fs.unlink('./fileForRead.txt',function(error) {
//   if(error) throw error;
//   console.log('文件删除成功')
// })

fs.unlinkSync('./fileForRead.txt');

