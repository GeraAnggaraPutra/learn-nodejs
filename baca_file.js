var fs = require('fs');
var http = require('http');
const host = "localhost";
const port = 3001;

http
  .createServer(function (request, response) {
    //baca file
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      //kirim response
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  })
  .listen(port, host, function () {
    console.log(`Server running on ${host}:${port}`);
  });