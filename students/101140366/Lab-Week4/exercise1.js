const fs = require('fs');
const readline = require('readline');
const process = require('process');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('command arg - extension: ',(ext) => {
    //Get current working directory
    let cwd = process.cwd()
    fs.readdir(cwd, (err, entries) => {
        if (!err) {
            for(let i = 0;i<entries.length;i++){
                if(entries[i].includes(ext)){
                    console.log(entries[i])
                }
            }
            console.log('File not found');
        }
    });
})
r1.close();
