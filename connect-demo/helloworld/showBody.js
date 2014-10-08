module.exports = showBody;

function showBody(req, res, next) {
    if (req.body) {
        console.log(req.body);
    }
    next();
}
