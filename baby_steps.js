var argv = process.argv.slice(2).map(Number);

var sum = 0;
for (var i = 0; i < argv.length; i++) {
  sum += argv[i];
}

console.log(sum);