exports.run = function(input) {
    var res = 0;
    var fs = require('fs'),
        readline = require('readline');

    var rd = readline.createInterface({
        input: fs.createReadStream(input),
        output: process.stdout,
        console: false
    });
    rd.on('line', function(line) {
        console.log(line);
        res += parseInt(line);
    });
    return res;
};
    // console.log(res);