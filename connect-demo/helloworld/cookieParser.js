module.exports = cookieParser;

function cookieParser() {

    return function (req, res, next) {
        var header = req.headers.cookie;
        var cookies = {};
        var pairs = header.split('; ');
        for (var i = 0; i < pairs.length; ++i) {
            var item = pairs[i].split('=');
            cookies[item[0]] = item[1];
        }
        req.cookies = cookies;
        next();
    };
}
