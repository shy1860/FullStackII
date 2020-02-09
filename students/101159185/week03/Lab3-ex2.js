//Ex 2
// ●	Write a node script file that uses the buffer above and does the following:
// o	creates a new event emitter
// o	register an event emitter listener 'convert'
// o	when 'convert' listener is called, a callback will iterate over the buffer elements and console log each string element
// o	emits the 'convert' event

console.log('#2---------------------------------')
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.once('newListener',(event, listener) => {
    if (event === "convert") {
        for(let i of buf){
            console.log(i.toString());
        }
        // for(let i of buf.toString()){
        //     console.log(i);
        // }
    }
})

myEmitter.on('convert', () => {
    console.log('buffer converted');
  }
);

myEmitter.emit('convert');