var http = require("http");

function start() {
    http.createServer(function(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Node!");
        response.end();
    }).listen(process.env.PORT);
    console.log("Server has been started.");
}

exports.start = start;