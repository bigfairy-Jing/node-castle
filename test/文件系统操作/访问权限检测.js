var fs = require('fs');

fs.access('./fileForRead.txt',function(err){
  if(err) throw err;
  console.log('文件可以访问')
})

try {
  fs.accessSync('./fileForRead.txt')
  console.log('文件可以访问')
} catch (e) {
  console.log(e)
}