const assert = require('assert');
const { e } = require('./code.js'); 

assert(Math.abs(e(0) - 1) < 1e-10);
assert(Math.abs(e(1) - 2) < 1e-10);
assert(Math.abs(e(10) - 2.7182818011463845) < 1e-10);
assert(Math.abs(e(20) - 2.7182818284590455) < 1e-10); 

console.log('All tests passed!');
