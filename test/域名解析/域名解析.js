/*
  dns.lookup();
  比如我们要查询域名 www.baidu.com 对应的ip， 可以通过 dns.lookup()。
*/
var dns = require('dns');
dns.lookup('www.baidu.com',function(err,address,){
  if(err) throw err;
  // console.log('百度ip',address)
})

//获取同一个域名的多个ip
var dns = require('dns');
var options = {all:true};
dns.lookup('www.baidu.com',options,function(err,address,family){
  if(err) throw err;
  // console.log('多个ip',address)
})

// dns.resolve4()

var dns = require('dns');
dns.resolve4('baidu.com', function (err, address, ) {
  if (err) throw err;
  console.log('百度ip', address) //[ '220.181.57.216', '123.125.114.144' ]
})

/*
 dns.lookup() 和 dns.resolve4() 区别
 可能最大的差异就在于， 当配置了本地Host时， 是否会对查询结果产生影响。
   dns.lookup()： 有影响。 
   dns.resolve4()： 没有影响。



*/