const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('newListener', (event, listener) => {
    if(event === 'convert'){
        myEmitter.on('convert', () =>{
            for (b of buf) {
                console.log(b.toString());
            }
        });
    }
});

myEmitter.on('convert', () =>{
    console.log("buffer converted");
});

myEmitter.emit('convert');