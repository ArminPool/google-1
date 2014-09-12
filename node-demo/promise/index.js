var fs = require('fs');

function readJSON(filename, callback) {
    fs.readFile(filename, 'utf8', function (err, res) {
        if (err) {
            return callback(err);
        }
    });
}
