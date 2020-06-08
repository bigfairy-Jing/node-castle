var fs = require('fs')
fs.open('./fileForRead.txt', function (e) {
  if (e) throw e
  console.log('文件打开成功')
})

// 比较底层的接口， 实际需要用到的机会不多。 需要用到的时候看下[文档](https: //nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback)就行。

// *
// flags： 文件打开模式， 比如 
// `r`、
// `r+`、
// `w`、
// `w+`
// 等。 可选模式非常多。 *
// mode： 默认是 `666`，
// 可读 + 可写。

// >
// fs.open(path, flags[, mode], callback) >
// fs.openSync(path, flags[, mode]) >
// fs.close(fd, callback) >
// fs.closeSync(fd)