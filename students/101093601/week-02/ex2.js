const makeUpperCase = (words) => {
    return new Promise((resolve, reject) => {
        output = []
        for (word of words) {
            if (typeof word !== 'string') {
                reject('Not all items in the array are strings!');
            }
            output.push(word.toUpperCase());
        }
        resolve(output);
    });
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        resolve(words.sort());
    });
}

const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true]

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeUpperCase(mixedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))

console.log('');