const compareNumToTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + ' is greater than 10, success!');
        }
        if (num < 10) {
            reject(num + ' is less than 10, error!');
        }
    });
}

compareNumToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareNumToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))

console.log('');