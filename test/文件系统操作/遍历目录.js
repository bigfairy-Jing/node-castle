var fs = require('fs');

var path = require('path')


//同步读取目录
var getFilesIndir = function (dir) {
  var results = [path.resolve(dir)];
  var files = fs.readdirSync(dir, 'utf8');

  files.forEach(function (file) {
    file = path.resolve(dir, file);

    var stats = fs.statSync(file);

    if (stats.isFile()) {
      results.push(file)
    } else if (stats.isDirectory()) {
      results = results.concat(getFilesIndir(file))
    }
  })
  return results;
}

var file = getFilesIndir('../../')
console.log(file)