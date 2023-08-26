// console.log(arguments);

const Calculator = require('./test-module-1');
const calc1 = new Calculator();
console.log(Calculator);
console.log(calc1.add(2, 5));

const { add, multiply } = require('./test-module-2');
console.log(add(2, 8));

// Caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
