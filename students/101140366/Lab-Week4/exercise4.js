const { fork } = require('child_process')

const forked = fork('compute.js')

forked.on('message', (result) => {
    console.log(`Long computation result: ${result}`)
})