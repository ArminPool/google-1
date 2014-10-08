var fs = require('fs');

fs.readFile('promise.js', 'utf8', function (err, data) {
    if (err) {
        return err;
    }

    console.log(data);
});

console.log('read promise.js:');
