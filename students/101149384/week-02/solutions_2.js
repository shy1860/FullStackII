// NATHALIA SILVA - LAB EXERCISES 2 - ES6 Promises Async/Await

// EXERCISE 1 - SOLUTIONS

const compareNumToTen = (num) => {
  p = new Promise((resolve, reject) => {
    if(num > 10) { resolve(num + " is greater than 10, success!")} 
    else { reject(num + " is less than 10, error!") }
  })
  return p
}


compareNumToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))
  

compareNumToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
 


// EXERCISE 2 - SOLUTIONS

const mixedWords = ['jaxx', 'tiny', 'clay']
const complicatedArray = ['anarchy', 99, true]

const makeUpperCase = (my_array) => {
   return new Promise((resolve, reject) => {
     
    let capsArray = my_array.map(word => {
     
      if(typeof word === 'string'){
        return word.toUpperCase()
      } else {
        reject('Error: Not all items in the array are strings!')
      }
    })
    resolve(capsArray)
  })
}

  
 const sortWords = (my_array) => {
   return new Promise((resolve, reject) => {
     if(my_array) {
       my_array.forEach((el) => {
         if(typeof el !== 'string'){
           reject('Error: Not all items in the array are strings!')
         }
       })
       resolve(my_array.sort());
     } else {
       reject('Error: Something went wrong with sorting words.') 
     }
 })
} 
  

makeUpperCase(mixedWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))
  

makeUpperCase(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))
  



// EXERCISE 3 - SOLUTIONS

let promise1 = 101;
let promise2 = "follow the white"
let promise3 = new Promise(function(resolve, reject) { resolve("rabbit..neo");})


const resolveAll = () => {
    const p = new Promise(function (resolve, reject) {
        return Promise.all([promise1, promise2, promise3])
            .then((values) => console.log(values));
    })
    return p;
} 

resolveAll()



// EXERCISE 4 - SOLUTIONS


const delayedPromise = (num) => {
  const p = new Promise(function (resolve, reject) {
      setTimeout(() => {
          resolve(num *  num);
      }, 500)
  })
  return p;
}


const delayedMultipley = (num) => {
  setTimeout(() => {
      console.log("done")
      return num *  num;
  }, 500)
}

const asyncPromise = async (num) => {
  const p = await new Promise(function (resolve, reject) {
      setTimeout(() => {
          resolve(num *  num);
      }, 500)
  })
  return p;
}


delayedMultipley(5);


delayedPromise(5)
 .then((result) => console.log('\n', result))


asyncPromise(6)
 .then((result) => console.log('\n', result))


console.log('\nWeek 2 Exercises :');

