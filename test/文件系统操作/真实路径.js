var fs = require('fs');
var path = require('path');

fs.realpath('./fileForRead.txt',function(err,resolvedPath){
  if(err)throw err;
  console.log(resolvedPath)
})