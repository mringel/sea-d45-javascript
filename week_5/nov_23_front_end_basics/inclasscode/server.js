var fs = require('fs');
var app = require('express')();

app.get('/:filename', function(req, res, next) {
  fs.stat(__dirname + '/build/' + req.params.filename, function(err, stats) {
    if (err) {
      console.log(err);
      return next();
    }

    if (!stats.isFile()) return next();

    var file = fs.createReadStream(__dirname + '/build/' + req.params.filename);
    file.pipe(res);
  });
});

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

app.listen(3000, function() {
  console.log('server up');
});
