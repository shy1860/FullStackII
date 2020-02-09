// NATHALIA SILVA - LAB WEEK 3


// EXERCISE 1 - SOLUTIONS

const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9]);
const buffer_string = Buffer.from(["I'm a string!", "utf-8"]);

console.log(buffer_string);

console.log(buffer_string.toString());

console.log(buffer_string.toString('hex'));

console.log(buffer_string.toString('utf8', 0, 10));

var buffarr = [buffer_array, buffer_string];
var buf = Buffer.concat(buffarr);
let json=JSON.stringify(buf);
console.log(json);