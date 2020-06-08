var fs = require('fs');

//异步
fs.rename('./timg.jpg','./liuyifei.jpg',function(e){
  if(e) throw e
  console.log('文件重命名成功')
})
//同步
fs.renameSync('./liuyifei.jpg','./woaideren.jpg')
