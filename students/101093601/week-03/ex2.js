const buf = Buffer.from([0x62, 0x75, 0x66, 0x65, 0x72]);

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('convert', () => {
    for (i of buf) {
        console.log(i.toString());
    }
    console.log("buffer converted");
});

myEmitter.emit('convert');