var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);

    if (q.pathname == "/search/" && req.method === "GET") {
        // ambil parameter dari URL
        var keyword = q.query.keyword;

        if (keyword) {
            // ambil data dari form dengan metode GET
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const result = `<h3>Search Result :</h3>
            <p>Anda memcari : <b>${keyword}</b></p>
            <pre>Tidak ada hasil! Maaf website ini masih dalam pengembangan</pre>`;
            res.write(result);
            res.end("<a href='/search/'>Kembali</a>");
        } else {
            // tampilkan form search
            fs.readFile('search.html', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("404 Not Found")
                }
                // kirim form search.html
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            })
        }
    }
}).listen(3001);

console.log("Server running on http://localhost:3001")