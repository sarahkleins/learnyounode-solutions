var http = require('http');
var urls = process.argv.slice(2);

urls.forEach(function(url) {
  var output = '';
  http.get(url, function(response){
    response.on('data', function(data){
      output += data;
    });
    response.on('error', function(err){
      return console.error('An errror occured: ' + err);
    })
    response.on('end', function(){
      console.log(output);
    });
  });
});