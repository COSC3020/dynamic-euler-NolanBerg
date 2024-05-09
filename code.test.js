const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(Math.abs(e(0) - 1) < 1e-10);
assert(Math.abs(e(1) - 2) < 1e-10);
assert(Math.abs(e(10) - 2.7182818011463845) < 1e-10);
assert(Math.abs(e(20) - 2.7182818284590455) < 1e-10); // More accurate value

console.log('All tests passed!');
