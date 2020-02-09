const fs = require('fs')
const path = require('path')

var cwd = process.cwd();
console.log(`current working directory: ${cwd}`);

var ext = process.argv[2]
console.log(`command arg - extension: .${ext}`)

fs.readdir(cwd, (err, filenames) => {
    if (err) throw err

    console.log(`========${ext} files on this directory:========`)

    filenames.filter(file => file.endsWith(ext))
        .forEach(file => console.log(file))

})
