var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamefile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!')
})