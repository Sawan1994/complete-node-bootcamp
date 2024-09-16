const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  // Solution 1
  //   fs.readFile('./txt/test-file.txt', (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // Solution 2: Streams
  //   const readable = fs.createReadStream('./txt/test-file.txt');
  //   readable.on('data', (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on('end', () => {
  //     res.end();
  //   });
  //   readable.on('error', () => {
  //     res.statusCode = 500;
  //     res.end('File not found!');
  //   });

  // Solution 3: Pipe
  const readable = fs.createReadStream('./txt/test-file.txt');
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening on 8000...');
});
