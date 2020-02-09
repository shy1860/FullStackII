const fs = require("fs");
const path = require("path");
const process = require('process');

const output = (filter)=>{
  console.log(`current dir: ${process.cwd()}`);
  fs.readdir(process.cwd(),(err,files)=>{
      for(const file of files){
        if (file.includes(filter)){
          console.log(file);
        }
      }
  })
}


process.argv.forEach((val,index)=>{

    
    if (!val.includes("/")){
        output(val);
    }
});

