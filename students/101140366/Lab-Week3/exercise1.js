// Buffer Array
const buffer_array = Buffer.from([8,6,7,5,3,0,9])
// Buffer String
const buffer_string = Buffer.from("I am a string!","utf-8")

// 1: Convert buffer_string to a string and 
// output
console.log(buffer_string.toString())

// 2: Convert buffer_string to hex
console.log(buffer_string.toString('hex'))

// 3: Convert buffer_string to utf-8 and read from 0 to 10
console.log(buffer_string.toString('utf-8',0,10))

// 4: Join two buffers and ouput
const joined_buffer = Buffer.concat([buffer_array,buffer_string])

console.log(joined_buffer)

// Convert joined_buffer to JSON
const buffToJSON = JSON.stringify(joined_buffer)
console.log(buffToJSON)