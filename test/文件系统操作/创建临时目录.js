var fs = require('fs');

fs.mkdtemp('/tmp/foo-', function (err, folder) {
  if(err) throw err
  console.log('创建临时文件目录' + folder)
})

