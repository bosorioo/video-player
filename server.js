const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading index.html');
      return;
    }

    // Set Cross-Origin Isolation headers for SharedArrayBuffer support
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    });

    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
