const compareNumToTen = (num) => {
    return new Promise((resolve,reject) => {
        if(num > 10){
            resolve(`${num} is greater than 10, success!`);
        }

        reject(
            `${num} is less than 10, Error!`
        );
    })
}

compareNumToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))

