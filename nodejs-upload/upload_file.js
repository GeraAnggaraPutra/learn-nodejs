var http = require('http')
var fs = require('fs')
var formidable = require('formidable')
var mv = require('mv')

http.createServer(function (req, res) {
    
    // kirim form upload
    if (req.url === "/" && req.method === "GET") {
        fs.readFile("form_upload.html", (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            if (err) throw err;
            res.end(data)
        });
    }

    // upload file
    if (req.url == "/" && req.method === "POST") {
        // membuat objek form dari formidable
        var form = new formidable.IncomingForm();
        
        // menangani upload file
        form.parse(req, function (err, fields, files) {
            console.log(files);
            var oldpath = files.filetoupload.filepath;
            var newpath = __dirname + "/uploads/" + files.filetoupload.originalFilename;

            // pindahkan file yang telah di upload
            mv(oldpath, newpath, function (err) {
                if (err) throw err;
                console.log('file uploaded successfully');
                return res.end("file uploaded successfully")
            })
        })
    }
}).listen(3001);
console.log('server running on http://localhost:3001')