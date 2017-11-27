var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(201, {'Content-Type': 'text/html'});
    res.end('<head><title>My site</title></head><body>Hello You!!</body>');
}).listen(8080);