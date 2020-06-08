var fs = require('fs');
/** 
`fs.stat()` vs `fs.fstat()`：传文件路径 vs 文件句柄。
`fs.stat()` vs `fs.lstat()`：如果文件是软链接，那么`fs.stat()`返回目标文件的状态，`fs.lstat()`返回软链接本身的状态。


fs.stat(path, callback) 
fs.statSync(path)


fs.fstat(fd, callback) 
fs.fstatSync(fd)


fs.lstat(path, callback) 
fs.lstatSync(path)

 主要关注 `Class: fs.Stats`。

 首先是方法

stats.isFile() --是否文件 *
stats.isDirectory() --是否目录 *
stats.isBlockDevice() --什么鬼 *
stats.isCharacterDevice() --什么鬼 *
stats.isSymbolicLink()(only valid with fs.lstat()) --什么鬼 *
stats.isFIFO() --什么鬼 *
stats.isSocket() --是不是socket文件

 官网例子：

   ``
 `javascript
{
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atime: Mon, 10 Oct 2011 23:24:11 GMT, // 访问时间
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,  // 文件内容修改时间
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,  // 文件状态修改时间
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT  // 创建时间
}
```
atime： Access Time // 访问时间
mtime::Modified Time // 文件内容修改时间
ctime: Changed Time. // 文件状态修改时间，比如修改文件所有者、修改权限、重命名等
birthtime: Birth Time // 创建时间。在某些系统上是不可靠的，因为拿不到。
*/

//异步
var getTimeDesc = function (d) {
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
}
fs.stat('./fileForRead.txt', function (err, stats) {
  console.log('文件大小:' + stats.size);
  console.log('创建事件' + getTimeDesc(stats.birthtime))
  console.log('访问时间' + getTimeDesc(stats.atime))
  console.log('修改时间' + getTimeDesc(stats.mtime))
})

//同步
var status = fs.statSync('./fileForRead.txt');
console.log('文件大小:' + status.size);
console.log('创建事件' + getTimeDesc(status.birthtime))
console.log('访问时间' + getTimeDesc(status.atime))
console.log('修改时间' + getTimeDesc(status.mtime))



