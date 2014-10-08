var connect = require('connect');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');

var showBody = require('./showBody');
var cookieParser = require('./cookieParser');
var showCookies = require('./showCookies');

var app = connect();

app.use(morgan('tiny'))
    .use(bodyParser.urlencoded({ extended: false}))
    .use(bodyParser.json())
    .use(showBody)
    .use(cookieParser())
    .use(showCookies)
    .use(serveStatic(__dirname + path.sep + 'public'));

app.listen(8888, function () {
    console.log('listen at: ' +  8888);
});
