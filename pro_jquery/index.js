var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('public'));

app.listen(8888, function () {
    console.log('listen at 8888');
});
