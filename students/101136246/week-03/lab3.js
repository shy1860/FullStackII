const buffer_array = Buffer.from([8 ,6 ,7 ,5 ,3, 0 ,9]);
const buffer_string = Buffer.from("I'm a string!", "utf-8");

string = buffer_string.toString();
hex = buffer_string.toString('hex');
utf = buffer_string.toString('utf8',0,10);
joined_buffer = Buffer.concat([buffer_array,buffer_string]);

console.log(utf);
console.log(hex);
console.log(string);
console.log(joined_buffer);

new_buffer = Buffer.concat([buffer_array,buffer_string]);
console.log(new_buffer.toJSON())

const buff = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const EventEmitter = require("events");

const myEvent =  new EventEmitter()
myEvent.on("convert", (buf) => {
  for(const char of buf){
    console.log(char.toString())
  }
  console.log(`buffer convert`)
});

myEvent.emit("convert",buff);