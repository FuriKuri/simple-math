#!/usr/bin/env node

var math = require('./lib/math');

var args = process.argv.slice(2);

console.log(math.plus(args[0], args[1]));
