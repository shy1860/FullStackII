const buffer_array=Buffer.from([8,6,7,5,3,0,8]);
const buffer_string=Buffer.from ("I am a string!",'utf-8');

console.log(buffer_array)

console.log(buffer_string.toString())
console.log(buffer_string.toString('hex'))
console.log(buffer_string.toString('utf8', 0, 10))
const buffer_all=Buffer.concat([buffer_string,buffer_array]);
console.log(buffer_all)

/*

 Buffer(7) [8, 6, 7, 5, 3, 0, 8]
I am a string!
4920616d206120737472696e6721
I am a str
 Buffer(21) [73, 32, 97, 109, 32, 97, 32, 115, …]

*/