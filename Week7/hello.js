const http = require('http');

const server = http.createServer(function ( request, response ) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world from node.js");
    response.write("\nHappy Friday!")
    response.end();
});

const port = 8080;
server.listen(port);

console.log("http://localhost:" + port);