const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}
const converter=new MyEmitter()
converter.once('newListener', (event, listener) => {
    if (event === 'events') {
      // Insert a new listener in front
      converter.on('events', () => {
        console.log('B');
      });}
      
      
  });

  converter.on('events', () => {
    console.log('A');
  });
  converter.emit('events')
  const con1=new MyEmitter()
  con1.once('newLis',(event1,listener)=>{
    if (event1 === 'noevents') {
        // Insert a new listener in front
        con1.on('noevents', () => {
          console.log('no events just joking');
        });
    }});
con1.on('noevents',() => {
    console.log('C');})
  con1.emit('noevents')


  // Prints:
  //   B
  //   A