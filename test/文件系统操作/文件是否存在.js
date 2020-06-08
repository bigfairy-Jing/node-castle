//`fs.exists()`已经是`deprecated`状态，现在可以通过下面代码判断文件是否存在。
var fs = require('fs');
fs.access('./fileForRead.txt',function(err) {
  if(err)throw err;
  console.log('fileForRead.txt文件存在')
})

fs.access('./fileForRead2.txt', function (err) {
  if (err) throw err;
  console.log('fileForRead2.txt存在');
});

// `fs.access()`除了判断文件是否存在（默认模式），还可以用来判断文件的权限。
// 备忘： `fs.constants.F_OK`
// 等常量无法获取（ node v6 .1， mac 10.11 .4 下， `fs.constants`
// 是 `undefined`）