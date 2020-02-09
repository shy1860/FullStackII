var fs = require('fs');
var path = require('path');
//directory path
var directoryPath = process.cwd();  
//file extension
var fileType = '.'+process.argv[2]; 
var files = [];

console.log("current working directory:", directoryPath)
console.log("command arg - extension:", fileType)

fs.readdir(process.cwd(), function(err,list){
    if(err) throw err;
    for(var i=0; i<list.length; i++)
    {
        if(path.extname(list[i])===fileType)
        {
            console.log(list[i]); //print the file
            files.push(list[i]); //store the file name into the array files
        }
    }
});