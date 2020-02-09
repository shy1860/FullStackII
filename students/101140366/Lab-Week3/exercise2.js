// Exercise 2
const buffer = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72])

// console.log(buffer.toString('utf-8'))
// Task 1: Create a new event emitter
const EventEmitter = require('events')
const myEmitter = new EventEmitter();


myEmitter.on('event',function convert(buffer){
    let str = buffer.toString('utf-8')
    for(let i = 0;i < str.length;i++){
        console.log(str.charCodeAt(i))
    }
    console.log("buffer converted")
})

myEmitter.emit('event',buffer)
