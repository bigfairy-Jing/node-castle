// `fs.watch()`比`fs.watchFile()`高效很多（why）

var fs = require('fs');


// fs.watchFile():实现原理:轮询,每隔一段时间检查文件是否发生变化,所以在不同平台上表现是一致的

var options = {
  persistent: true,
  interval: 2000 //多久检查一次 
}

fs.watchFile('./fileForRead.txt', options, function (cur, prev) {
  console.log(cur, prev, '修改了文件')
})

//fs.watch()  该接口并不是所有平台行为都一样,并且某些情况下是不可用的

var options2 = {
  persistent: true,
  recursive: true,
  encoding: 'utf8'
}
fs.watch('../', options2, function (event, filename) {
  console.log('促发事件:' + event);
  if (filename) {
    console.log('文件名是:' + filename)
  } else console.log('文件名没有提供')
})


// ##
//   修改所有者

//   参考linux命令行， 不举例子了。。。

//   >
//   fs.chown(path, uid, gid, callback) >
//   fs.chownSync(path, uid, gid) >
//   fs.fchown(fd, uid, gid, callback) >
//   fs.fchownSync(fd, uid, gid)


// ##
// 修改权限

// 可以用 `fs.chmod()`，
// 也可以用 `fs.fchmod()`。
// 两者的区别在于， 前面传的是文件路径， 后面传的的文件句柄。

// 1. `fs.chmod)`、
// `fs.fchmod()`
// 区别： 传的是文件路径， 还是文件句柄。
// 2. `fs.chmod()`、
// `fs.lchmod()`
// 区别： 如果文件是软连接， 那么 `fs.chmod()`
// 修改的是软连接指向的目标文件； `fs.lchmod()`
// 修改的是软连接。

//   >
//   fs.chmod(path, mode, callback) >
//   fs.chmodSync(path, mode)

//   >
//   fs.fchmod(fd, mode, callback) >
//   fs.fchmodSync(fd, mode)

//   >
//   fs.lchmod(path, mode, callback)# >
//   fs.lchmodSync(path, mode)


// 例子：

//   ``
// `javascript
// var fs = require('fs');

// fs.chmod('./fileForChown.txt', '777', function(err){
//     if(err) console.log(err);
//     console.log('权限修改成功');
// });
// `
// ``
// 同步版本：

//   ``
// `
// var fs = require('fs');

// fs.chmodSync('./fileForChown.txt', '777');
// `
// ``


