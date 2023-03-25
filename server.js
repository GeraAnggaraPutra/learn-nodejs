var http = require('http');
var url = require('url');
const host = "localhost";
const port = 3001;

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
  switch (request.url) {
    case "/":
      response.write("Ini adalah halaman home");
      break;
    case "/about":
      response.write("Ini adalah halaman about");
      break;
    case "/profile":
      response.write("Ini adalah halaman profile");
      break;
    default:
      response.write("404 halaman tidak ditemukan");
    }

    var q = url.parse(request.url, true).query;
    var text = ' Kata kunci : ' + q.keyword;
    response.end(text);
}).
  listen(port, host, "", function () {
    console.log(`Server running on ${host}:${port}`);
  });;

