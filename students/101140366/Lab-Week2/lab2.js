// UI Thread is responsible for rendering what you see on the web page
// Topic: JS for Networking, Promise
// Three asynchoronous patterns: Callbacks, Promise, Async/Await
// Alert is an example of synchronous block of code
// Avoiding anonymous functions is a good practice for writing easy-to-maintain code
// Error as the first parameter and result as the second parameter


// Callbacks example
// What Callback does?
// What problems does Callbacks help us to eliminate
const fs = require('fs')
const path = './users.json'
fs.readFile(path,function checking(err,result){
    if (err){
        console.log("Errors: "+err)
    }
    else{
        console.log("Successfully read file: "+result)
    }
})

// Promise example
// How fast IOBound access the data is the importance of JS
// Resolve and reject takes function
// Network Request is a good example of using Promise

