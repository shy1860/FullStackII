function makeUpperCase(arr) {
    return new Promise((resolve,reject) => {
        out = []
        for (let i of arr){
            if (typeof i != "string") reject('Error! Not all items in array are strings!')
            out.push(i.toUpperCase());
        }
        resolve(out);
    })
}

function sortWords(arr) {
    return new Promise((resolve,reject) =>{
        resolve(arr.sort())
    })
}

const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeUpperCase(mixedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))