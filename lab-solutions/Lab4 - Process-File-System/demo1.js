let fs = require("fs");
let P = require("path");

const { spawn } = require("child_process");
const dir = spawn("dir", ["."]);


for (var i = 0; i < 10; i++) {
  var fileName = `test${i}.txt`;
  console.log("called");

  fs.appendFile(fileName, "Hello World!", function(err) {
    if (err) console.log(err);
    else console.log("Write operation complete.");
  });
}

dir.stdout.on("data", data => console.log(`stdout: ${data}`));
dir.stderr.on("data", data => console.log(`stderr: ${data}`));
dir.on("close", code => console.log(`child process exited with code ${code}`));
