const http = require('http');

const PORT = 3001

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

server.listen(PORT, err => {
    console.log("server started")
});