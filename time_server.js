var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket){
  function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
  }
  var date = new Date();
  var year = date.getFullYear();
  var month = zeroFill(date.getMonth() + 1);
  var day = zeroFill(date.getDate());
  var hour = zeroFill(date.getHours());
  var min = zeroFill(date.getMinutes());

  var formattedDate = year + "-" + month + "-" + day + " " + hour + ":" + min;

  socket.end(formattedDate + '\n');
});

server.listen(port);