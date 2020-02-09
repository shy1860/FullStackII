const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9])
const buffer_hex = Buffer.from([0x49, 0x27, 0x20, 0x73, 0x74, 0x69, 0x6e, 0x67, 0x21])
const buffer_string = Buffer.from("I'm a string!", "utf-8");
const joined_buffer = Buffer.concat([buffer_array,buffer_string]);
const json = JSON.stringify(joined_buffer);

console.log(buffer_array);
console.log(buffer_hex);
console.log(buffer_string.toString());
console.log(buffer_hex.toString('hex'));
console.log(buffer_string.toString('utf-8', 0, 10));
console.log(joined_buffer);
console.log(json);