var fs = require('fs');

//异步写入
// fs.writeFile('./fileForRead.txt','一丝丝帅吗?不是很帅','utf8',function(err){
//   if(err) throw err
//   console.log('文件写入成功')
// })

//同步写入
// try {
//   fs.writeFileSync('./fileForRead.txt','那个很帅的男人是谁','utf8')
//   console.log('文件写入成功')
// } catch (error) {
//   throw error
// }

//通过文件流写入
var writeStream = fs.createWriteStream('./fileForRead.txt','utf-8');

writeStream.on('close', function () { // 已经关闭，不会再有事件抛出
  console.log('已经关闭')
})
writeStream.write('hello ')
writeStream.write('myname ')
writeStream.write('is ')
writeStream.write('wuyanzu.')
writeStream.end('')

// ###
// 相对底层的接口

//   >
//   fs.write(fd, buffer, offset, length[, position], callback) >
//   fs.write(fd, data[, position[, encoding]], callback) >
//   fs.writeSync(fd, buffer, offset, length[, position]) >
//   fs.writeSync(fd, data[, position[, encoding]])

//   *
//   fd： 写入的文件句柄。 *
//   buffer： 写入的内容。 *
//   offset： 将buffer从offset位置开始， 长度为length的内容写入。 *
//   length： 写入的buffer内容的长度。 *
//   position： 从打开文件的position处写入。 *
//   callback： 参数为 `(err, written, buffer)`。
// `written`
// 表示有xx字节的buffer被写入。
//备注：`fs.write(fd, buffer, offset, length[, position], callback)`跟`fs.write(fd, data[, position[, encoding]], callback)`的区别在于：后面的只能把所有的data写入，而前面的可以写入指定的data子串？
//





