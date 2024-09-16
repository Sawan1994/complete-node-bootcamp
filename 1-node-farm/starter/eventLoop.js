const fs = require('fs');

fs.readFile('./txt/input.txt', 'utf-8', () => {
  console.log('I/O finished');

  setTimeout(() => console.log('Timeout 1 finished'), 0);
  setTimeout(() => console.log('Timeout 2 finished'), 2000);
  setImmediate(() => console.log('Immediate 1 finished'));

  process.nextTick(() => console.log('next tick finished'));
});
