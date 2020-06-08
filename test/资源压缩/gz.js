//完成本地文件的gzip压缩

var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();
var inFile = fs.createReadStream('./extra/fileForCompress.txt');
var out = fs.createWriteStream('./extra/fileForCompress.txt.gz');

inFile.pipe(gzip).pipe(out)