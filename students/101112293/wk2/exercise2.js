const makeUpperCase = (words) => {
    return new Promise((resolve, reject) => {
        array = [];
        try {
            for (word of words) 
                array.push(word.toUpperCase());
        } catch (error) {
            reject('Error: not all elements in the array are string!')
        } finally {
            resolve(array);
        }
    });
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        resolve(words.sort());
    });
}

const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true];

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));


makeUpperCase(mixedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));