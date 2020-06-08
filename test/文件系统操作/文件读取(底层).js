// ## 文件读取（底层）

// 相对底层的读取接口，参数如下

// * fd：文件句柄。
// * buffer：将读取的文件内容写到buffer里。
// * offset：buffer开始写入的位置。（在offset开始写入，还是offset+1？）
// * length：要读取的字节数。
// * position：文件从哪个位置开始读取。如果是null，那么就从当前位置开始读取。（读取操作会记录下上一个位置）

// 此外，`callback`的回调参数为`(err, bytesRead, buffer)`

// >fs.read(fd, buffer, offset, length, position, callback)
