const delayedPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 500);
    });
}

delayedPromise(5)
    .then(result => console.log(result));

async function asyncPromise (num) {
    return await delayedPromise(num);
}

asyncPromise(6)
    .then(result => console.log(result));

console.log('');