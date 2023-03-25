var fs = require('fs');

fs.open('mynewfile2.txt', 'w+', function (err, file) {
    if (err) throw err;

    // content yang akan ditulis ke file
    let content = "Hello nama saya Gera Anggara";

    // tulis content ke file
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('Saved!')
    });

});

// baca file
    fs.readFile('mynewfile2.txt', (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    });