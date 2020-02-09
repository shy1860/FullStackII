// Task 1
const delayedPromise1 = (num) =>{
    return new Promise((resolve,reject) =>{
        resolve(25)
    })
}

delayedPromise1(5)
    .then(result => console.log(result))

// Task 2
const delayedPromise2 = (num) =>{
    return new Promise((resolve,reject) => {
        resolve(num*num)
    })
}

async function asyncPromise(num){
    const result = await delayedPromise2(num)
    return result    
}

asyncPromise(6)
    .then(result => console.log(result))
