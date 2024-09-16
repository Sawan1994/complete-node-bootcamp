const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('A new sale is done');
});

myEmitter.on('newSale', () => {
  console.log('Customer: John Doe');
});

myEmitter.on('newSale', (stock) => {
  console.log(`Items left: ${stock}`);
});

myEmitter.emit('newSale', 10);

////////
const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received...');
  res.end('Request received');
});

server.on('request', (req, res) => {
  console.log('Another Request received...');
});

server.listen('8000', '127.0.0.1', () => {
  console.log('Waiting for requests...');
});

server.on('close', () => {
  console.log('Server closed');
});
