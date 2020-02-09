const fs = require('fs');
const path = require('path');
const process = require('process');

console.log('platform:', process.platform);
console.log('architecture:', process.arch);

console.log('node version:', process.version);
console.log('v8 version:', process.versions.v8);
console.log('libuv version:', process.versions.uv);

console.log('pid:', process.pid);
console.log('title:', process.title);
console.log('current directory:', process.cwd());