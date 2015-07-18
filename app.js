var express = require('express');
var app = express();

// Set view engine
app.set('views', './views');
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

// Routing
app.get('/', function (req, res) {
  res.render('index', {title:'Vekaleten'});
});
app.get('/login', function (req, res) {
  res.render('login', {title:'Login'});
});

// Static Files
app.use(express.static('./semantic/dist'));
app.use(express.static('./public'));

// Basic Server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Vekaleten app listening at http://%s:%s', host, port);
});