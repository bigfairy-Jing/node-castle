var fs = require('fs');

fs.rmdir('./temp',function(err){
  if(err) throw err;
  console.log('目录删除成功')
})