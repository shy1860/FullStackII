// exec() returns the whole buffer output from the child process. (not a stream)
const exec = require("child_process").exec;

// run updatime unix function - windows - systeminfo
// ie. pipe => updatime | cut -d "," -f 1
let child = exec("systeminfo", function(err, stdout, stderr) {
  if (err)
    // throw error, with invalid unix command
    console.log(`Error: ${stderr}`);
  //  console log the output of the command or error
  else console.log(`Output: ${stdout}`);
});

console.log(`Child process PID: ${child.pid}`);
