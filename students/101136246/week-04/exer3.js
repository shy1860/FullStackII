const process = require('process');

setInterval(() =>null,1000)

process.on("SIGINT",()=>{
  console.log(`process uptime on signal interrupt: ${process.uptime()}`)
  console.log(`process uptime on exit: ${process.uptime()}`)

  process.exit();
})
