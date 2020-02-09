const process = require('process');

setInterval(() => null, 1000);

process.on("exit", () => {
  console.log("process exiting...");
  process.exit();
});
process.on("SIGINT", () => {
  console.log("signal interupt");
  process.emit("exit");
});