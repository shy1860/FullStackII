// NATHALIA SILVA - LAB WEEK 3

// EXERCISE 2 - SOLUTIONS

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
var events = require('events');
var myEmitter = new events.EventEmitter();

//Event handler
var myEventHandler = () => {
    for (i of buf){
        console.log(i)
    }
    console.log("buffer Converted")
}

//Assign event handler to an event
myEmitter.on('convert', myEventHandler);

//Fire event
myEmitter.emit('convert');
© 2020 GitHub, Inc.