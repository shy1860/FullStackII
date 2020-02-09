// 2 functions 
// #1: makeUpperCase() take an array and capitalize
// #2: sortWords() return error if not contain Strings
// Write two functions that use Promises that you can chain! The first function, makeUpperCase(), 
// will take in an array of words and capitalize them, and then the second function, sortWords(), 
// will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

/* 

const promise1 = new Promise(function(resolve, reject) {
  resolve('Success!');
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "Success!"
});
*/

const makeUpperCase = (arrayOfChar) => {
    return new Promise((resolve,reject) => {
        // Check if the array contains all strings
        // 
        invalid = false
        arrayOfChar.forEach(element => {
            if(typeof element !== 'string'){
                invalid = true
            }
        });
        if(invalid){
            reject(`Error: Not all items in the array are strings`)
        }
        else{
            arrayOfChar = arrayOfChar.map(x => x.toUpperCase())
            resolve(arrayOfChar)
        }
    })
}

const sortWords = (words) => {
    return new Promise((resolve, reject) =>{
        resolve(words.sort())
    })
}


const names = ['jaxx','tiny','clay']
const mixed = ['anarchy',99,true]

//Test cases
makeUpperCase(names)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

makeUpperCase(mixed)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

// makeUpperCase(names)

