var net = require('net');

var port = '8989';
var host = '127.0.0.1'

var server = net.createServer(function(socket){
  console.log('connected:' + socket.remoteAddress + ':' + socket.remotePort)
  socket.on('data', function (data) {
    console.log('DATA ' + socket.remoteAddress + ': ' + data);
    console.log('Data is: ' + data);

    socket.write('Data from you is  "' + data + '"');
  });

  socket.on('close', function () {
    console.log('CLOSED: ' +
      socket.remoteAddress + ' ' + socket.remotePort);
  });



})

server.listen(port,host)

console.log(server)