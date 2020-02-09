// Using the process object write a script that logs the following

const process = require('process');

//System Part
console.log(`== System ==`)
console.log(`platform: ${process.platform}`);
console.log(`architecture: ${process.arch}`)
console.log(``)
// NodeJs Part
console.log(`== NodeJS ==`);
console.log(`Node Version: ${process.version}`)
console.log(`V8 Version: ${process.versions.v8}`)
console.log(`libuv version: ${process.versions.zlib}`)
// PID Part
console.log(``)
console.log(`== Process ==`)
console.log(`Process ID: ${process.pid}`)
console.log(`title: ${process.title}`)
console.log(`current working directory: ${process.cwd()}`)
// console.log(`node version: ${process.}`)

