var fs = require('fs')
var file = process.argv[2];

fs.readFile(file, 'utf8', function(err, contents){
  if (err) throw err;
  var newlines = contents.split('\n').length - 1;
  console.log(newlines);
});
