const { fork } = require('child_process');
const forked = fork(`${__dirname}/compute.js`);

let message = "";

forked.on('message', (m) => {
    console.log('Long computation result: ', m);
    message = m;
})

forked.send(message)