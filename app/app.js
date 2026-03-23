const http = require('http');

const server = http.createServer((req, res) => {
  res.end("DevOps Final Project Running 🚀");
});

server.listen(3000);