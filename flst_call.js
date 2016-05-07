var filefilter = require('./flst_module.js');

var dirname = process.argv[2];
var ext = process.argv[3];

filefilter(dirname, ext, function(err, filteredFiles){
  for (i = 0; i < filteredFiles.length; i++) {
    console.log(filteredFiles[i]);
  }
})
