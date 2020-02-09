// spawn returns a stream.
var spawn = require("child_process").spawn,
  ps = spawn("ls"), // unix ps ===> windows - ls
  grep = spawn("findstr", ["child"]); // unis grep ===> windows -findstr

// The returned process object will hold a property for
//each std type represented as a Stream: .stdin - WriteStream, .stout - ReadStream and finally .stderr
ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);dir


ps.stderr.on("data", function(data) {
  console.log("ps stderr: " + data);
});

grep.stderr.on("data", function(data) {
  console.log("grep stderr: " + data);
});
