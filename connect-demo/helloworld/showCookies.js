module.exports = showCookies;

function showCookies(req, res, next) {
    console.log(req.cookies);
    next();
}
