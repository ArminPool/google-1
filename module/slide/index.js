var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic('./', {index: './index.html'}));

http.createServer(app)
    .listen(9999, function () {
        console.log('listen at: 9999');
    });
