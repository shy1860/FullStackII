const compareToTen  = (numb) => {
    return new Promise((resolve, reject) => {
        if(numb > 10) { resolve(`${numb} is greater than 10`);}
        else {reject(`${numb} is smaller than 10`);}
    })
}

// compareToTen(15).then(result=>console.log(result)).catch(error=>console.log(error))
// compareToTen(8).then(result=>console.log(result)).catch(error=>console.log(error))


const makeUpperCase = (arr) => {
   
    const upArr = arr.map(x => x.toString().toUpperCase());
   
    return new Promise((resolve) => {
        resolve(upArr);
    });
}

const sortWord = (upArr) => {
    const resultArr = upArr.sort();
    let check = true;
    let regex = /^[A-Z]*$/
    return new Promise((resolve, reject) => {
        for (const char of resultArr)
        {
            if (!regex.test(char))
            {
                check = false;
                break;
            }
        }
        if(check) {
        resolve(resultArr);
        }
        else {
            reject(`Error: Not all items in the array are strings!`);
        }
    })
}
arr =['jax','Bin','ARR']
mixed = ['Jax23','Bain','W@3']

// makeUpperCase(arr).then(sortWord)
//                 .then((result => console.log(result)))
//                 .catch(error => console.log(error))


// makeUpperCase(mixed).then(sortWord)
//                 .then((result => console.log(result)))
//                 .catch(error => console.log(error))


var promise1  = 101
var promise2 = "follow the white"
var promise3 = new Promise((resolve, reject)=>{
    resolve("rabbit.. neo")
});

// Promise.all([promise1,promise2,promise3]).then(result => console.log(result));

const delayedMultiply =  (num) => {
    setTimeout( () => {
        console.log('Done!!!')
        return num * num
    }, 500);
}

const delayedPromise = (num) => {
    return new Promise((resolve, reject)=>{
        setTimeout( () => {
            resolve(num*num)
        }, 2000)
    })
}

// delayedPromise(5).then(result => { console.log(result)})

const asyncPromise = async (num) =>{
    console.log("Calling!!!");
    const result = await delayedPromise(num);
    return result;
}

asyncPromise(6).then(result => {console.log(result)});