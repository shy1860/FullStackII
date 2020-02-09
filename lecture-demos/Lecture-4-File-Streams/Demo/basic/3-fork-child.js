// Fork is a special instance of spawn, that runs a fresh instance of the V8 engine
var fork = require("child_process").fork;

var child = fork(__dirname + "\\timeout.js");

child.on("message", function(data) {
  console.log(`message sent is ${data}`);
  child.send({ cmd: "done" });
});

child.send({ cmd: "start", timeout: 500 });
