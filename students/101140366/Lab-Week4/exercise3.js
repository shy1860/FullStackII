const process = require('process')

setInterval(()=>null,1000)
process.on('SIGINT',()=>{
    console.log(`process uptime on signal interrupt: ${process.uptime()}`)})
process.on('exit',()=>{
        console.log(`process uptime on exit: ${process.uptime()}`)
    })