//NATHALIA SILVA
// 101149384


let P = require("path");
let FS = require("fs");


let folder = process.cwd();
let ext = "." + process.argv[2];

console.log(`Current working directory: ${folder}`)
console.log(`Command arg - extension : ${ext}`);






let allFiles = FS..readdir(folder, (err, files) => 
{
  if (err) throw err

files.filter(f => P.extname(f) == ext)
    .forEach(f => console.log(f))

}
)
