  // fs.readlink(path[, options], callback) 
  // fs.readlinkSync(path[, options])

  var fs = require('fs');

  var randomFileName = './fileForReadlink-' + String(Math.random()).slice(2, 6) + '.txt';
  fs.symlinkSync('./fileForRead.txt',randomFileName)
  console.log(randomFileName)
  fs.readlink(randomFileName,'utf8',function(err,linkString){
    if(err) throw err;
    console.log('链接的内容',linkString)
  })