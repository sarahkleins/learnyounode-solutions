var fs = require('fs');
var path = require('path');

module.exports = function(folder, extension, callback) {
  var ext = "." + extension;

  fs.readdir(folder, function(err, files){
    if (err) {
      return callback(err);
    } else {
      returnedFiles = [];
      for(var i = 0; i < files.length; i++){
        if (path.extname(files[i]) === ext) {
          returnedFiles.push(files[i]);
        }
      }
      callback(null, returnedFiles);
    }
  });
}