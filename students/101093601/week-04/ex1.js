const fs = require('fs');

const filePath = process.cwd();
const ext = process.argv[2];

console.log(`current working directory: ${filePath}`);
console.log(`command arg - extention : ${ext}`);

fs.readdir(filePath, (err, files) => {
    files.forEach(file => {
        let extention = '.' + file.split('.')[1];
        if (ext == extention) {
            console.log(file);
        }
    });
});
