'use strict';
const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  process.env.VERSION=25;
  response.end(JSON.stringify(process.env, null, '  '));
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

process.on('SIGTERM', () => {
  server.stop({ timeout: 5 * 1000 }, () => {
    process.exit(0);
  });
});
