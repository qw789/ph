var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.use(function(req, res, next) {
    console.log(404);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
app.get('/a', function(req, res, next) {
    res.send('sucess');
    next();
});


// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)
});