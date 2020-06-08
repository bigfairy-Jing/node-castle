var fs = require('fs');

fs.mkdir('./dir',function(err) {
  if(err) throw err;
  console.log('目录创建成功')
})

var fs = require('fs');

fs.mkdirSync('./testDir')