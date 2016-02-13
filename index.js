'use strict';
const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  response.end(process.env);
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
