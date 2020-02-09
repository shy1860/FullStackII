const fs = require('fs');
const path = require('path');
const process = require('process');

var dir = process.cwd();
var ext = process.argv[2];

console.log(dir);
console.log(ext);

fs.readdir(dir, (err, files) => {
    files.filter(file => file.endsWith(ext)).forEach(file =>{
        console.log(file);
    });
});

