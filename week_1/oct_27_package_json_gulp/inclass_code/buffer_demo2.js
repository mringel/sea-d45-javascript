var fs = require('fs');

process.nextTick(function() {
  console.log('first nextTick')
});

process.nextTick(function() {
  console.log('second nextTick')
});


fs.readFile('somefile.txt', function(err, data) {
  if (err) return console.log(err);
  console.log(data.toString());
});

process.nextTick(function() {
  console.log('last nextTick')
});


console.log('hello from console');
